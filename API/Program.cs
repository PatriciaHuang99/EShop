using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. // order is not important

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<StoreContext>(opt => {
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// Enable CORS (Cross-Origin Resource Sharing)
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline. // order is important
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(opt =>
{
    // Allow any header to be sent in the request
    opt.AllowAnyHeader()
    
    // Allow any HTTP method (GET, POST, PUT, DELETE, etc.)
    .AllowAnyMethod()
    
    // Specify the allowed origins (in this case, http://localhost:3000 and http://localhost:3001)
    .WithOrigins("http://localhost:3000", "http://localhost:3001");
});

app.UseAuthorization();

app.MapControllers();

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try{
    context.Database.Migrate();
    DbInitializer.Initialize(context);
}
catch (Exception ex){
    logger.LogError(ex, "A problem occurred during migration");
}

app.Run();

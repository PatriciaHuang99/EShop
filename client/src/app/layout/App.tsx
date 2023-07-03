import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  // use Product interface
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products").then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "some brand",
        description: "some description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }

  return (
    <div className="app">
      <h1>hi</h1>
      {/* 
      Catalog component receives the required properties through the Props interface,
      ensuring that all necessary parameters are passed.
      */}
      <Catalog products={products} addProduct={addProduct} />
      
    </div>
  );
}

export default App;
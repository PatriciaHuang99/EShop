import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

// note: props: Props = {products, addProduct}: Props
// note: Add props ahead when using props. ex: props.products.
export default function Catalog() {
  // use Product interface
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products").then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

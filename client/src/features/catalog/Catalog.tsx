import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";

// note: props: Props = {products, addProduct}: Props
// note: Add props ahead when using props. ex: props.products.
export default function Catalog() {
  // use Product interface
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

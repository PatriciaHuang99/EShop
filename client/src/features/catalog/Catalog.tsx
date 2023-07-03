import { Fragment } from "react";
import { Product } from "../../app/models/product";


// The interface `Props` defines the properties that should be passed to the component.
interface Props {
    products: Product [];
    addProduct: () => void
}

// note: props: Props = {products, addProduct}: Props
// note: Add props ahead when using props. ex: props.products.
export default function Catalog({products, addProduct}: Props) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}></button>
    </>
  );
}

import { Fragment } from "react";
import { Product } from "../../app/models/product";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import ProductList from "./ProductList";


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
     <ProductList products={products}/>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </>
  );
}

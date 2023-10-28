import React,{useState} from "react";

function Item({ name, category }) {

  const[inCart, setInCart] = useState(false)
  const itemCart = inCart? "in-cart":"";

  function handleCart(){
    setInCart(!inCart)

  }

  return (
    <li className={itemCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart?"remove":"add"}
      onClick={handleCart}>
        {inCart ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;

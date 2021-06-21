import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInchart] = useState(false)

  const displayClass = () => {setInchart(inCart => !inCart)}
  

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={displayClass} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;

import React from "react";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const { title, price, description } = props;

  return (
    <li>
      <Card>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

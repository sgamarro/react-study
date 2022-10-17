import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section>
      <h2>Buy your favorite products </h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!!"
        />
      </ul>
    </section>
  );
};

export default Products;

import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ department, products }) => {
  console.log("Products Container");
  console.log(products);

  // const shownProducts = products.filter(p =>
  //   department ? p.department === department : true,
  // );
  return (
    <>
      {products.map(x => (
        <ProductCard
          id={x.id}
          key={x.id}
          name={x.name}
          description={x.description}
          department={x.department}
          category={x.category}
          retail_price_cents={x.retail_price_cents}
        />
      ))}
    </>
  );
};

export default ProductsContainer;

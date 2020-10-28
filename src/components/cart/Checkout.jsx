import React from "react";
import Cart from "./Cart";
import CartItem from "./CartItem";

const style = { marginTop: "100px", marginLeft: "8px" };

const Checkout = ({
  children,
  hasProducts,
  total,
  products,
  onCheckoutClicked,
  getQuantityById,
  removeItem,
  updateQuantity,
}) => {
  return (
    <div style={style}>
      <Cart
        hasProducts={Array.isArray(products) && products.length > 0}
        total={total}
        onCheckoutClicked={onCheckoutClicked}
      >
        {Array.isArray(products) &&
          products.map((product) => (
            <CartItem
              id={product.id}
              name={product.name}
              retail_price_cents={product.retail_price_cents}
              key={product.id}
              getQuantityById={getQuantityById}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
      </Cart>
    </div>
  );
};

export default Checkout;

import React from "react";

const CartItem = ({ id, name, retail_price_cents }) => {
  return (
    <div>
      {name}&#09;${(retail_price_cents / 100).toFixed(2)}
    </div>
  );
};

export default CartItem;

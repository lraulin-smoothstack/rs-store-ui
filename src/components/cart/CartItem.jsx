import React from "react";

const CartItem = ({ id, name, retail_price_cents, getQuantityById }) => {
  const quantity = getQuantityById(id);
  console.log(quantity);
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{((retail_price_cents / 100) * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;

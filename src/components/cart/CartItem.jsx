import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const CartItem = ({
  id,
  name,
  retail_price_cents,
  getQuantityById,
  removeItem,
  updateQuantity,
}) => {
  const quantity = getQuantityById(id);
  console.log(quantity);
  return (
    <tr>
      <td>{name}</td>
      <td style={{ width: "2em" }}>
        <Form.Control
          type="number"
          value={quantity}
          onChange={e =>
            e.target.value > 0 ? updateQuantity(id, e.target.value) : null
          }
        />
      </td>
      <td>{"$" + ((retail_price_cents / 100) * quantity).toFixed(2)}</td>
      <td>
        <Button onClick={() => removeItem(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;

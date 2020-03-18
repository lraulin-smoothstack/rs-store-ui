import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import Cart from "./Cart";

const CartHeader = ({
  products,
  total,
  totalItems,
  onCheckoutClicked,
  getQuantityById,
}) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id="signinPopover">
          <Popover.Content>
            <Cart
              products={products}
              total={total}
              onCheckoutClicked={onCheckoutClicked}
              getQuantityById={getQuantityById}
            />
          </Popover.Content>
        </Popover>
      }
    >
      <Button>
        <FontAwesomeIcon icon={faShoppingCart} />
        <Badge pill>{totalItems}</Badge>
      </Button>
    </OverlayTrigger>
  );
};

export default CartHeader;

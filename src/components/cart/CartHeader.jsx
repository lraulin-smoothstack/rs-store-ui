import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import Cart from "./Cart";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartHeader = ({
  products,
  total,
  totalItems,
  onCheckoutClicked,
  getQuantityById,
  removeItem,
  updateQuantity,
}) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id="cartPopover">
          <Popover.Content>
            <Cart
              hasProducts={Array.isArray(products) && products.length > 0}
              total={total}
              onCheckoutClicked={onCheckoutClicked}
            >
              {products.map((product) => (
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
            <Link to="/checkout">
              <Button>Checkout</Button>
            </Link>
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

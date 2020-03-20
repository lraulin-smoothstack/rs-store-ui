import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";

const setup = (total, products = [], children = "") => {
  const actions = {
    onCheckoutClicked: jest.fn(),
  };

  const component = shallow(
    <Cart hasProducts={products.length > 0} total={total} {...actions}>
      {children}
    </Cart>,
  );

  return {
    component: component,
    actions: actions,
    button: component.find("button"),
    em: component.find("em"),
    p: component.find("p"),
    thead: component.find("thead"),
  };
};

describe("Cart component", () => {
  it("should display total", () => {
    const { p } = setup("76");
    expect(p.text()).toMatch(/^Total: \$76/);
  });

  describe("when given no products", () => {
    it("should display add some products message", () => {
      const { em } = setup();
      expect(em.text()).toMatch(/^Please add some products to cart/);
    });

    it("should disable button", () => {
      const { button } = setup();
      expect(button.prop("disabled")).toEqual("disabled");
    });

    it("should not render a table head with one row", () => {
      const { thead } = setup();
      expect(thead).toHaveLength(0);
    });
  });

  describe("when given product(s)", () => {
    const product = [
      {
        id: 1,
        title: "Product 1",
        price: 9.99,
        quantity: 1,
      },
    ];

    it("should render a table head with one row", () => {
      const { thead } = setup("9.99", product);
      expect(thead).toHaveLength(1);
    });

    it("should not disable button", () => {
      const { button } = setup("9.99", product);
      expect(button.prop("disabled")).toEqual("");
    });

    it("should call action on button click", () => {
      const { button, actions } = setup("9.99", product);
      button.simulate("click");
      expect(actions.onCheckoutClicked).toBeCalled();
    });
  });
});

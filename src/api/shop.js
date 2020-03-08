/**
 * Mocking client-server processing
 */
const API_URL = "https://zr8lc1a181.execute-api.us-east-1.amazonaws.com/dev";

const createOrder = ({
  product_id = 0,
  user_id = 0,
  coupon_code = "",
  quantity = 0,
}) => ({
  product_id,
  user_id,
  coupon_code,
  quantity,
  in_store: 1,
  date: new Date().toISOString(),
  ship_date: null,
  status: "placed",
  deleted: 0,
});

const placeOrder = async ({ product_id, user_id, coupon_code, quantity }) => {
  const order = createOrder({ product_id, user_id, coupon_code, quantity });
  try {
    const result = await fetch(API_URL + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const responseBody = await result.json();
    const orderId = responseBody.insertId;
    console.log("Order " + orderId + " created successfully.");
  } catch (e) {
    console.log(e);
  }
};

export default {
  getProducts: async () => {
    try {
      const result = await fetch(API_URL + "/products");
      const data = await result.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  buyProducts: payload => {
    console.log("Placing order...");
    for (let item of payload) {
      placeOrder({
        product_id: item.product_id,
        quantity: item.quantity,
        user_id: item.user_id,
        coupon_code: item.coupon_code,
      });
    }
  },
  login: async (email, password) => {
    try {
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "customer@customer.com",
          password: "customer",
        }),
      });
      const responseBody = await response.json();
      return responseBody;
    } catch (e) {
      console.log(e);
    }
  },
};

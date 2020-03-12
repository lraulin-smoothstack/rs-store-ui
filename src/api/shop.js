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

const get = async url => {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

const post = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const putWithToken = async (url, data, token) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: new Headers({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  });
  return await response.json();
};

const placeOrder = async ({ product_id, user_id, coupon_code, quantity }) => {
  const order = createOrder({ product_id, user_id, coupon_code, quantity });
  return await post(API_URL + "/orders", order);
};

export default {
  getProducts: async () => {
    return await get(API_URL + "/products");
  },
  buyProducts: payload => {
    for (let item of payload) {
      placeOrder({
        product_id: item.product_id,
        quantity: item.quantity,
        user_id: item.user_id,
        coupon_code: item.coupon_code,
      });
    }
  },
  login: async ({ email, password }) => {
    return await post(API_URL + "/login", { email, password });
  },
  register: async ({ email, password }) => {
    return await post(API_URL + "/register", { email, password });
  },
  updateUser: async ({
    id,
    email,
    first_name,
    last_name,
    address,
    phone,
    jwt,
  }) => {
    console.log("updateUser API call");
    console.log(
      id +
        " " +
        email +
        " " +
        first_name +
        " " +
        last_name +
        " " +
        address +
        " " +
        phone +
        " " +
        jwt,
    );
    try {
      const url = `${API_URL}/users/${id}`;
      const body = {
        email,
        first_name: first_name,
        last_name: last_name,
        address,
        phone,
      };
      return await putWithToken(url, body, jwt);
    } catch (e) {
      console.log(e);
    }
  },
};

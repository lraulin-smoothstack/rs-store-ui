const API_URL = "http://localhost:3000";

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

const get = async (url) => {
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
  console.log("PLACING ORDER:");
  console.log(JSON.stringify(order));
  return await post(API_URL + "/orders", order);
};

export default {
  getProducts: async () => {
    const res = await get(API_URL + "/products");
    return res ? res.map((x) => ({ ...x, id: x._id })) : [];
  },
  buyProducts: (payload) => {
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
    try {
      const res = await post(API_URL + "/users/login", {
        username: email,
        password,
      });
      return { email, jwt: res.token };
    } catch (e) {
      console.log(e);
    }
  },
  register: async ({ email, password }) => {
    return await post(API_URL + "/users/register", {
      username: email,
      password,
    });
  },
  updateUser: async ({ id, email, jwt }) => {
    console.log("updateUser API call");
    console.log(id + " " + email + " " + jwt);
    try {
      const url = `${API_URL}/users/${id}`;
      const body = {
        username: email,
      };
      return await putWithToken(url, body, jwt);
    } catch (e) {
      console.log(e);
    }
  },
};

/**
 * Mocking client-server processing
 */

const TIMEOUT = 100;
const API_URL = "https://0ogofj3z44.execute-api.us-east-1.amazonaws.com/dev";

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
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};

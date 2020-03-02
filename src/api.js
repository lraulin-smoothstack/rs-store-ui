const apiUrl = "https://0ogofj3z44.execute-api.us-east-1.amazonaws.com/dev";

export const getProducts = async () => {
  try {
    const result = await fetch(apiUrl + "/products");
    const data = await result.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default { getProducts };

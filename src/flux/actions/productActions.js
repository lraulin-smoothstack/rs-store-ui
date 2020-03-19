import Dispatcher from "../dispatcher/appDispatcher";
import axios from "axios";

const backend = "https://0ogofj3z44.execute-api.us-east-1.amazonaws.com/dev";
const ProductActions = {
  createProduct: function(body) {
    Dispatcher.dispatch({
      actionType: "create_products_started",
    });
    axios
      .post(backend + "/products", body)
      .then(result => {
        body.id = result.data.insertId;
        console.log(body);
        Dispatcher.dispatch({
          actionType: "create_products_successful",
          data: body,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "create_products_failure",
        });
      });
  },

  readProducts: function() {
    Dispatcher.dispatch({
      actionType: "read_products_started",
    });
    console.log(backend + "/products");
    axios
      .get(backend + "/products")
      .then(result => {
        Dispatcher.dispatch({
          actionType: "read_products_successful",
          data: result.data,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "read_products_failure",
        });
      });
  },

  updateProduct: function(product) {
    Dispatcher.dispatch({
      actionType: "update_products_started",
    });
    const body = {
      name: product.name,
      description: product.description,
      category: product.category,
      department: product.department,
      photo_url: product.photo_url,
      wholesale_price_cents: product.wholesale_price_cents,
      retail_price_cents: product.retail_price_cents,
      discountable: product.discountable,
      stock: product.stock,
      deleted: product.deleted,
    };
    axios
      .put(backend + "/products/" + product.id, body)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "update_products_successful",
          data: product,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "update_products_failure",
        });
      });
  },

  deleteProduct: function(id) {
    Dispatcher.dispatch({
      actionType: "delete_products_started",
    });
    axios
      .delete(backend + "/products/" + id)
      .then(() => {
        Dispatcher.dispatch({
          actionType: "delete_products_successful",
          data: id,
        });
      })
      .catch(error => {
        console.log(error);
        Dispatcher.dispatch({
          actionType: "delete_products_failure",
        });
      });
  },
};

export default ProductActions;

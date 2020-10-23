import {
  RECEIVE_PRODUCTS,
  SET_DEPARTMENT,
  SET_SEARCH_STRING,
} from "../constants/ActionTypes";

// const products = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         inventory: state.stock - 1,
//       };
//     default:
//       return state;
//   }
// };

const initialState = {
  byId: {},
  visibleIds: [],
};

const getVisibleIds = (productsById, department, searchString) => {
  let products = Object.values(productsById);
  if (department)
    products = products.filter((p) => p.department === department);
  if (searchString)
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchString.toLowerCase()) ||
        p.description.toLowerCase().includes(searchString.toLowerCase())
    );
  return products.map((p) => p.id);
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const products = action.products || [];
      return {
        ...state,
        byId: products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
        visibleIds: products.map((product) => product.id),
      };
    case SET_DEPARTMENT:
      return {
        ...state,
        visibleIds: getVisibleIds(
          state.byId,
          action.department,
          action.prevFilter.searchString
        ),
      };
    case SET_SEARCH_STRING:
      return {
        ...state,
        visibleIds: getVisibleIds(
          state.byId,
          action.prevFilter.department,
          action.searchString
        ),
      };
    default:
      return state;
  }
};

export default productReducer;

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = (state) =>
  state.visibleIds.map((id) => getProduct(state, id));

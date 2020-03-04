import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  SET_DEPARTMENT,
  SET_SEARCH_STRING,
} from "../constants/ActionTypes";

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.stock - 1,
      };
    default:
      return state;
  }
};

const initialState = {
  byId: {},
  visibleIds: [],
};

const getVisibleIds = (productsById, department, searchString) => {
  let products = Object.values(productsById);
  if (department) products = products.filter(p => p.department === department);
  if (searchString)
    products = products.filter(
      p =>
        p.name.toLowerCase().includes(searchString.toLowerCase()) ||
        p.description.toLowerCase().includes(searchString.toLowerCase()),
    );
  return products.map(p => p.id);
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        byId: action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
        visibleIds: action.products.map(product => product.id),
      };
    case SET_DEPARTMENT:
      return {
        ...state,
        visibleIds: getVisibleIds(
          state.byId,
          action.department,
          action.searchString,
        ),
      };
    case SET_SEARCH_STRING:
      return {
        ...state,
        visibleIds: getVisibleIds(
          state.byId,
          action.department,
          action.searchString,
        ),
      };
    default:
      return state;
  }
};

export default productReducer;

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));

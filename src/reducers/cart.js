import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  UPDATE_QUANTITY,
  REMOVE_ITEM,
} from "../constants";

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    }
    case REMOVE_ITEM: {
      return state.filter((x) => x !== action.itemId);
    }
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { productId } = action;
      return { ...state, [productId]: (state[productId] || 0) + 1 };
    }
    case UPDATE_QUANTITY: {
      const { itemId, quantity } = action;
      return { ...state, [itemId]: quantity };
    }
    case REMOVE_ITEM: {
      const { itemId } = action;
      const newState = { ...state };
      delete newState[itemId];
      return newState;
    }
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = (state) => state.addedIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;

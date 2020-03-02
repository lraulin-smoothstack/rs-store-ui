import {
  SET_DEPARTMENT,
  SET_SEARCH_STRING,
  UPDATE_FILTER,
} from "../constants/ActionTypes";

const initialState = {
  department: null,
  searchString: null,
};

const department = (state = initialState.department, action) => {
  switch (action.type) {
    case SET_DEPARTMENT:
      const { department } = action;
      return department;
    default:
      return state;
  }
};

const searchString = (state = initialState.searchString, action) => {
  switch (action.type) {
    case SET_SEARCH_STRING:
      const { searchString } = action;
      return searchString;
    default:
      return state;
  }
};

export const getDepartment = state => state.department;

export const getSearchString = state => state.searchString;

const filter = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return initialState;
    default:
      return {
        department: department(state.department, action),
        searchString: searchString(state.searchString, action),
      };
  }
};

export default filter;

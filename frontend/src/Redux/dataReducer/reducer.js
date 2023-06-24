import {
  POST_DATA_PENDING,
  POST_DATA_REJECT,
  POST_DATA_SUCESS,
} from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  evalres: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case POST_DATA_PENDING:
      return { ...state, isLoading: true, isError: false };
    case POST_DATA_SUCESS:
      return { ...state, isLoading: false, evalres: payload };
    case POST_DATA_REJECT:
      return { ...state, isLoading: false, isError: true };
    default: {
      return state;
    }
  }
};

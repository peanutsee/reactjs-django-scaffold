import {
  CONSTANT_THAT_SAYS_REQUEST,
  CONSTANT_THAT_SAYS_SUCCESS,
  CONSTANT_THAT_SAYS_FAIL,
  CONSTANT_THAT_SAYS_RESET,
} from "../Constants/Constants";

export const reducerName = (state = { data: [] }, action) => {
  switch (action.type) {
    case CONSTANT_THAT_SAYS_REQUEST:
      return { loading: true };
    case CONSTANT_THAT_SAYS_SUCCESS:
      return { loading: false, data: action.payload };
    case CONSTANT_THAT_SAYS_FAIL:
      return { loading: false, error: action.payload };
    case CONSTANT_THAT_SAYS_RESET:
      return {};
    default:
      return state;
  }
};

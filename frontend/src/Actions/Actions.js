import {
  CONSTANT_THAT_SAYS_REQUEST,
  CONSTANT_THAT_SAYS_SUCCESS,
  CONSTANT_THAT_SAYS_FAIL,
  CONSTANT_THAT_SAYS_RESET,
} from "../Constants/Constants";
import axios from "axios";

export const actionName = (parameters, list) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONSTANT_THAT_SAYS_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(`${the / backend / endpoint}`, config);

    dispatch({
      type: CONSTANT_THAT_SAYS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONSTANT_THAT_SAYS_FAIL,
    });
  }
};

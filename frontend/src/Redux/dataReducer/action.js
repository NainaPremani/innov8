import axios from "axios";
import {
  POST_DATA_PENDING,
  POST_DATA_REJECT,
  POST_DATA_SUCESS,
} from "./actionTypes";

const API = "http://localhost:5000";
export const postuserAnswers = (payload) => (dispatch) => {
  dispatch({ type: POST_DATA_PENDING });
  return axios
    .post(`${API}/evaluation`, payload)
    .then((res) => {
      dispatch({ type: POST_DATA_SUCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_DATA_REJECT });
      console.log(err);
    });
};

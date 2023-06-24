import axios from "axios";
import { COURSE_FAIL, COURSE_SUCCESS } from "./actionTypes";
const API = "http://localhost:5000";
export const CourseSelection = (selectedCourse) => (dispatch) => {
  console.log(selectedCourse);
  return axios
    .post(`${API}/qestions`, selectedCourse)
    .then((res) => {
      console.log("Selected Course Track", res.data.result);
      dispatch({ type: COURSE_SUCCESS, payload: res.data.result });
    })
    .catch(() => {
      dispatch({ type: COURSE_FAIL });
    });
};

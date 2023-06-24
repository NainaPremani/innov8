import { Route, Routes } from "react-router-dom";
import LoginForm from "../pages/Login";
import RegistrationForm from "../pages/SignUp";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Practice from "../pages/Practice";
import Microphone from "./microphone";
import Feedback from "../pages/Feedback";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/microphone" element={<Microphone />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;

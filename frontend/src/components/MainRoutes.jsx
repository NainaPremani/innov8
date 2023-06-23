import { Route, Routes } from "react-router-dom";
import LoginForm from "../pages/Login";
import RegistrationForm from "../pages/SignUp";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./components/MainRoutes";

export default function App() {
  return (
    <div className="bg-[url('./assets/bg-svg.png')]">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

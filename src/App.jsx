import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default App;

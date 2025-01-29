import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Dashboard from "./pages/DashBoard/DashBoard";

const App = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("User has logged");
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
      
  );
};

export default App;

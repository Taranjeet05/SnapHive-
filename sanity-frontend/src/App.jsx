import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Home from "./container/Home";
import Login from "./components/LogIn";

const MainApp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!user) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Router>
        <MainApp />
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

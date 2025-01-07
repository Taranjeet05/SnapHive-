import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./container/Home";
import Login from "./components/LogIn";
import { GoogleOAuthProvider } from "@react-oauth/google"; 

const App = () => {
  return (
    // Wrap your app with GoogleOAuthProvider
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

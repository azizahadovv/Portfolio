import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import FigmaHed from "./Figma/FigmaHed";
import LogIn from "./logIn/LogIn";
import SignUp from "./logIn/SignUp";
import Admin from "./logIn/Admin";
import axios from "axios";
function App(props) {
  const navigate = useNavigate();
  const blockPage = ["/admin", "/payments", "/mentor"];
  const location = useLocation();
  let token = localStorage.getItem("Token");
  let x = location.pathname;
  useEffect(() => {
    if (blockPage.includes(x)) {
      axios({
        url: "http://localhost:3030/users/" + token,
      })
        .then((res) => {})
        .catch((err) => {
          navigate("/");
        });
    }
  }, [x]);

  return (
    <div className="heder1">
      <Routes>
        <Route path="/" element={<FigmaHed />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

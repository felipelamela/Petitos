import React from "react";
import style from "./Login.module.css";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import Register from "./Register/Register";
import RecoverPass from "./RecoverPass/RecoverPass";
import ResetPass from "./ResetPass/ResetPass";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="register" element={<Register />} />
        <Route path="recoverPass" element={<RecoverPass />} />
        <Route path="resetPass" element={<ResetPass />} />
      </Routes>
    </div>
  );
};

export default Login;

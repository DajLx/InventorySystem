import { useState } from "react";
import { Routes, Route } from "react-router";

import Home from "./components/Home";
import AuthLayout from "./components/AuthLayout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <div id="app-box">
      <Routes>
        <Route index element={<Home />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

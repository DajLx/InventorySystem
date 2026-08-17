import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import Home from "./components/Home";
import AuthLayout from "./components/AuthLayout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div id="app-container">
      <Routes>
        <Route index element={<Home />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

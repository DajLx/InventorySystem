import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import Home from "./components/Home";
import AuthLayout from "./components/AuthLayout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Products from "./components/home/Products";
import Categories from "./components/home/Categories";
import Suppliers from "./components/home/Suppliers";
import WebOrders from "./components/home/WebOrders";
import CreateInvoice from "./components/home/CreateInvoice";

function App() {
  return (
    <div id="app-container">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="web-orders" element={<WebOrders />} />
          <Route path="create-invoice" element={<CreateInvoice />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

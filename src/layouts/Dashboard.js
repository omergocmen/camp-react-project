import React from "react";
import { Grid } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import SignInDetails from "../pages/SignInDetails";
import LogInDetails from "../pages/logInDetails";
import Home from '../pages/Home'
import CartDetail from '../pages/CartDestail'

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<CartDetail />} />
          <Route exact path="/product/add" element={<ProductAdd />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/signIn" element={<SignInDetails />} />
          <Route exact path="/logIn" element={<LogInDetails />} />
        </Routes>
    </div>
  );
}

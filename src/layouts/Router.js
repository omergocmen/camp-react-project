import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import ProductAdd from "../pages/ProductAdd";
import SignInDetails from "../pages/SignInDetails";
import LogInDetails from "../pages/logInDetails";
import Home from "../pages/Home";
import CartDetail from "../pages/CartDestail";
import { useSelector } from "react-redux";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

export default function Router() {
  const state = useSelector((state) => state.auth);
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute isLogged={state.auth} />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<CartDetail />} />
          <Route exact path="/product/add" element={<ProductAdd />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
        </Route>
        <Route element={<PublicRoute isLogged={state.auth} />}>
          <Route exact path="/signIn" element={<SignInDetails />} />
          <Route exact path="/logIn" element={<LogInDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

{
  /* 
           
      {state.auth ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<CartDetail />} />
          <Route exact path="/product/add" element={<ProductAdd />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/signIn" element={<Home />} />
          <Route exact path="/logIn" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<LogInDetails />} />
          <Route exact path="/home" element={<LogInDetails />} />
          <Route exact path="/cart" element={<LogInDetails />} />
          <Route exact path="/product/add" element={<LogInDetails />} />
          <Route exact path="/products/:id" element={<LogInDetails />} />
          <Route exact path="/signIn" element={<SignInDetails />} />
          <Route exact path="/logIn" element={<LogInDetails />} />
        </Routes>
      )}  */
}

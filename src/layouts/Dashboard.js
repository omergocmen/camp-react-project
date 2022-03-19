import React from "react";
import { ToastContainer } from "react-toastify";
import Router from "./Router";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
        <hr />
        <Router/>
    </div>
  );
}

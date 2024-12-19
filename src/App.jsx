import "./App.css";
import React from "react";
import Form from "./SignIn";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import Cart from "./Cart";
import AddItem from "./AddItems";
import Items from "./items";
import Dashboard from "./dashboard/Dashboard";
import Products from "./dashboard/products";
import Orders from "./dashboard/Orders";
import Customers from "./dashboard/Customers";
import Settings from "./dashboard/Settings";
import ProductProvider from "./dashboard/products/productProvider";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/items" element={<Items />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

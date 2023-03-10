import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path="/" element={<Shop />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

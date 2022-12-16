import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

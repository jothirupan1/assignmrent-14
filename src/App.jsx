import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import New from "./components/New";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Products />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/New"
          element={
            <>
              <New />
            </>
          }
        />
        <Route
          path="/Home"
          element={
            <>
              <Banner />
              <Products />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

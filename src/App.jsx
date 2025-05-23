import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Nav from './components/Nav'
import Banner from './components/Banner'
import New from './components/New'
import Products from "./components/Products";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
   < BrowserRouter>
   <Routes>
    <Route 
    path="/"
    element={
      <div>
        <Nav />
        <Banner />
        <Products />
          <Contact />
        <Footer />
      
      </div>
    }
    />
    <Route path="/New" element={ <New />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
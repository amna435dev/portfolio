import React from "react";
import Header from "./Components/header/Header";
import Home from "./Components/pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, Outlet} from "react-router";
import About from "./Components/pages/about/about";
import Contact from "./Components/pages/Contact/Contact";
// import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
     
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {Outlet}
      <Footer />
    </div>
  );
};

export default App;

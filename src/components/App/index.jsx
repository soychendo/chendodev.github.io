import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from '@context/GlobalContext';

import Home from "@components/home/";
import Header from "@components/header/";
import About from "@components/about/";
import Contact from "@components/contact/";
import Portfolio from "@components/portfolio/";

const App = () => {
  return (
    <>
    <Router>
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </GlobalProvider>
      </Router>
    </>
  );
}

export default App;

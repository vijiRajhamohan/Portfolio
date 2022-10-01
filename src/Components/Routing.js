import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import Skills from "../Pages/Skills";

function routing() {
  
  return (
    
     
      <Routes>
        <Route path={"/"} element={<Home />} exact />
        <Route path={"/Home"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/project"} element={<Project />} />
        <Route path={"/Skills"} element={<Skills />} />
      </Routes>
   
  );
}

export default routing;

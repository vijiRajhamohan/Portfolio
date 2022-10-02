import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import Skills from "../Pages/Skills";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from '../themes';
const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
`; 

function Routing() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
      <Routes>
          <Route path={"/"} element={<Home themeToggler={themeToggler} />} exact />
          <Route path={"/home"} element={<Home themeToggler={themeToggler} />} />
          <Route path={"/about"} element={<About themeToggler={themeToggler} />} />
          <Route path={"/contact"} element={<Contact themeToggler={themeToggler} />} />
          <Route path={"/project"} element={<Project themeToggler={themeToggler} />} />
          <Route path={"/skills"} element={<Skills themeToggler={themeToggler} />} />
      </Routes>
   </StyledApp>
   </ThemeProvider>
  
  );
}

export default Routing;

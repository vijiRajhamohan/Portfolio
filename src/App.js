import React from "react";
// import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Routing from "./Components/Routing";
// import Toggle from "./Pages/Toggle";
// import { ThemeContext } from "./Context";

function App() {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
     // <div
      //   style={{
      //     backgroundColor: darkMode ? "#222" : "white",
      //     color: darkMode && "white",
      //   }}
      // >
      //   <Toggle />
      <BrowserRouter>
        <Nav />
        <Routing />
      </BrowserRouter>
    // </div>
  );
}

export default App;

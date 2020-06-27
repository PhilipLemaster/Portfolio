import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import NavMain from "./components/NavMain";


function App() {
  return (
    <Router>
      <NavMain />
    </Router>
  );
}

export default App;
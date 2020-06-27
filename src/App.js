import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import NavMain from "./components/NavMain";

function App() {
  return (
    <div>
      <Router>
        <NavMain />
      </Router>
    </div>
    
  );
}

export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  BrowserRouter
} from "react-router-dom";
import Compiler from "./pages/Compiler"

function App(){
return(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Compiler />} />
    </Routes>
   </BrowserRouter>
);
}

export default App
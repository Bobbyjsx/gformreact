import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  BrowserRouter
} from "react-router-dom";
import Compiler from "./pages/Compiler";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Compiler" element={<Compiler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
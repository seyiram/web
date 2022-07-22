import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

function App() {
  return (
    <div className="font-face-global">
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;

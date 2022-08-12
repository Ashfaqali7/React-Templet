import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
function MyRouting() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRouting;

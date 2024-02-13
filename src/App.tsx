import React from "react";
import "./App.css";
import WhatIsYourName from "./pages/what-is-your-name/WhatIsYourName";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Anonymous from "./pages/anonymous/Anonymous";
import PreciousScreen from "./pages/precious-screen/PreciousScreen";
import CloseScreen from "./pages/close-screen/CloseScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhatIsYourName />} />
        <Route path="/anonymous" element={<Anonymous />} />
        <Route path="/my-valentine" element={<PreciousScreen />} />
        <Route path="/thank-you" element={<CloseScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

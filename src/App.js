import React from "react";
import SmallCalendar from "./components/SmallCalendar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/Entry";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>        
        <Route path="/" element={<Entry/>}></Route>
        <Route path="/reg" element={<Registration/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import SmallCalendar from "./components/SmallCalendar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/Entry";
import Registration from "./components/Registration";
import './styles/index.css'
import Calendarlists from './components/Calendarlists';
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>        
        <Route path="/" element={<Entry/>}></Route>
        <Route path="/reg" element={<Registration/>}></Route>
        <Route path="/MainPage" element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import SmallCalendar from "./components/SmallCalendar";
import RegistrationEntry from "./components/RegistrationEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/registrationEntryComponents/Entry";
import Registration from "./components/registrationEntryComponents/Registration";
import BigCalendar from "./components/BigCalendar";

function App() {
  return (
    // <BrowserRouter className="App">
    //   <Routes>
    //     <Route path="/" element={<Entry/>}></Route>
    //     <Route path="/reg" element={<Registration/>}></Route>
    //   </Routes>
    // </BrowserRouter>
      <div className="App">
        <SmallCalendar/>
        <BigCalendar/>
      </div>
  );
}

export default App;

import React from "react";
import SmallCalendar from "./components/SmallCalendar";
import RegistrationEntry from "./components/RegistrationEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/registrationEntryComponents/Entry";
import Registration from "./components/registrationEntryComponents/Registration";
import './styles/index.css'
import Calendarlists from './Components/Calendarlists';

function App() {
    return (
        <BrowserRouter className="App">
            <Routes>
                <Route path="/" element={<Entry/>}></Route>
                <Route path="/reg" element={<Registration/>}></Route>
            </Routes>
        </BrowserRouter>
    <div className="App"></div>
);
}

export default App;
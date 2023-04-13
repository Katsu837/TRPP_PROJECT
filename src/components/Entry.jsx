import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Entry.css"

const Entry = function(){
    const [user, setUser] = useState({
        login: "", 
        password: ""
    })

    const navigate = useNavigate()
    

    return(
        <div className="registr">
        <div className="entry-main">
            <h2>Entry</h2>
            <form>
                <input placeholder="Login" type="text" id="login" value={user.login} onChange={event => setUser({...user, login: event.target.value})} required />
                <input placeholder="Password" type="password" id="password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required />
                <button id="entry"
                onClick={(event)=>{
                    event.preventDefault()
                    navigate("/MainPage") // пока что этой страницы нет, потому что вы еще ее не сделали
                }}>Entry</button>            
            </form>
            <Link to="/reg">Wanna create an account?</Link>
            <Link to="/MainPage">MainPage</Link>
        </div>
        </div>)
}

export default Entry;
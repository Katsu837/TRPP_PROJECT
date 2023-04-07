import React, { useState } from "react";
const Registration = function(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    return(
        <div className="registration-main">
            <h2>Registration</h2>
            <form action="#" method="post">
                <input type="text" id="login" name="login" value="Login" required />
                <input type="email" id="email" name="email" value="Email" required />
                <input type="password" id="password" name="password" value="Password" required />
                <input type="password" id="password" name="password" value="Confirm password" required />
                <button id="register">Register</button>
            </form>
        </div>)
}
import React from "react";
const Entry = function(){
    return(
        <div className="entry-main">
            <h2>Entry</h2>
            <form action="#" method="post">
                <input type="text" id="login" name="login" value="Login" required />
                <input type="password" id="password" name="password" value="Password" required />
                <button id="entry">Entry</button>
            </form>
        </div>)
}
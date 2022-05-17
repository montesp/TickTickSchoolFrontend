import React from "react";
import './Username.css';

function Username({user}){
    return(
        <p className="username">
            {user}
        </p>
    );
}

export {Username};
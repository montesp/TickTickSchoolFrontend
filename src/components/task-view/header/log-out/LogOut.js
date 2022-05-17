import React from "react";
import './LogOut.css';

function LogOut({text}){
    return(
        <a
        className="log-out"
        href="./LogOut.css"
        >
            {text}
        </a>
    );
}

export {LogOut};
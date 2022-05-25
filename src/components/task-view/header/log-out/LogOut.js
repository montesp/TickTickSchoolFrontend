import React from "react";
import { Link } from "react-router-dom";

import './LogOut.css';

function LogOut({text}){
    return(
        <Link
        className="log-out"
        to={'/'}
        >
            {text}
        </Link>
    );
}

export {LogOut};
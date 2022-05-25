import React from "react";
import { useNavigate } from "react-router-dom";


function LoginButton({text, rute}){
    const navigate = useNavigate();

    return(
        <button
        type="button"
        className="button-login"
        onClick={()=> navigate(rute)}
        >
            {text}
        </button>
    );
}

export {LoginButton};
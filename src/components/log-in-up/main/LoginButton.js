import React from "react";
import { useNavigate } from "react-router-dom";


function LoginButton({
    text,
    rute,
    check,
    setAcceptLogin,
    acceptLogin,
}){
    const navigate = useNavigate();

    const onUp = () => {
        check();

       if(acceptLogin){
           navigate(rute)
       }
    }

    return(
        <button
        type="button"
        className="button-login"
        onClick={() => onUp()}
        >
            {text}
        </button>
    );
}

export {LoginButton};
import React from "react";

function LoginButton({text}){
    return(
        <button
        type="button"
        className="button-login"
        >
            {text}
        </button>
    );
}

export {LoginButton};
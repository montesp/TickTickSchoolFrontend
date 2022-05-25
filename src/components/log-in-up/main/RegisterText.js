import React from "react";
import { Link } from "react-router-dom";

function RegisterText(){
    return(
        <p className="check-user">
            No tienes una cuenta? Crea una <Link
            to='registro'
            className="check-user__checked">
            aqui
            </Link>
        </p>
    );
}

export { RegisterText };
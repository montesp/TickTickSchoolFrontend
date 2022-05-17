import React from "react";

function Input({id, placeholder}){
    return (
        <input
        className="input"
        id={id}
        placeholder={placeholder}
        />
    );
}

export { Input };
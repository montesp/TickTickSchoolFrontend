import React from "react";

function Input({
    id,
    placeholder,
    type,
}){
    return (
        <input
        className="input"
        id={id}
        placeholder={placeholder}
        type={type}
        />
    );
}

export { Input };
import React from "react";
import { LabelInput } from "./LabelInput.js";
import { Input } from "./Input";


function InputContainer({
    text,
    id,
    placeholder,
    type,
}){

    return(
        <div className="input-container">
            <LabelInput text={text} />
            <Input
                id={id}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}

export { InputContainer };
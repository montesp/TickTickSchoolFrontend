import React from "react";
import { LabelInput } from "./LabelInput.js";
import { Input } from "./Input";


function InputContainer({text, id,placeholder}){
    return(
        <div className="input-container">
            <LabelInput text={text} />
            <Input
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
}

export { InputContainer };
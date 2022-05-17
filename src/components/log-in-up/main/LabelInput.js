import React from "react";



function LabelInput(props){
    return(
        <label
        className="label"
        >
        {props.text}
        </label>


    );
}

export { LabelInput };
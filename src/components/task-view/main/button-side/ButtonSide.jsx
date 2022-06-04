import React from 'react';
import { useNavigate } from "react-router-dom";
import './ButtonSide.css';

function ButtonSide({
    alt,
    src,
    text,
    route,
}){
    const navigate = useNavigate();

    return(
        <button
        className='button-side'
        onClick={()=> navigate(route)}
        >
            <img
            alt={alt}
            src={src}
            className="button-side-icon"
            />
            <p className='button-side-title'>
                {text}
            </p>
        </button>
    );
}

export {ButtonSide};
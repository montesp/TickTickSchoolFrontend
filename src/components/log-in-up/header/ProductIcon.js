import React from "react";
import icon from '../../../assets/icons/calendar.svg'

function ProductIcon(){
    return (
        <img
            className="icon-product"
            alt="icono del producto"
            src={icon}
        />
    );
}

export { ProductIcon };
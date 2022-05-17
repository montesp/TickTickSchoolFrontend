import React from "react";
import  './InfoContainer.css';


function InfoContainer({children}){
    return (
        <div className="info-container">
            {children}
        </div>
    );
}

export { InfoContainer };
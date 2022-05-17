import React from "react";
import './HeaderInfo.css';

function HeaderT({children}){
    return (
        <div className="header-task-container">
            {children}
        </div>
    );
}

export { HeaderT };
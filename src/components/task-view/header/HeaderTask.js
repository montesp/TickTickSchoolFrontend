import React from "react";
import  './HeaderTask.css';


function HeaderTask({children}){
    return (
        <header className="header-task">
            {children}
        </header>
    );
}

export { HeaderTask };
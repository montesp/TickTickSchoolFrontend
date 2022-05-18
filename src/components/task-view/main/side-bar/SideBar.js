import React from "react";
import './SideBar.css';

function SideBar({children}){
    return(
        <side className="side-bar">
            {children}
        </side>
    );
}

export { SideBar };
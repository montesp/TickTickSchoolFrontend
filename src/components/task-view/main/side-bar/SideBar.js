import React from "react";
import './SideBar.css';

function SideBar({children}){
    return(
        <div className="side-bar">
            {children}
        </div>
    );
}

export { SideBar };
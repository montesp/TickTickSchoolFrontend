import React from "react";
import "./MainTaskContainer.css"

function MainTaskContainer({children}){
    return (
        <main className="main-task-container">
            {children}
        </main>
    );
}

export { MainTaskContainer };
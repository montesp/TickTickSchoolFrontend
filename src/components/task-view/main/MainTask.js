import React from "react";


function MainTask({children}){
    return (
        <main className="main-task">
            {children}
        </main>
    );
}

export { MainTask };

import React from 'react';
import './MainTask.css'

function MainTask({children}){
    return(
        <div className="main-task">
            {children}
        </div>
    );
}

export { MainTask }
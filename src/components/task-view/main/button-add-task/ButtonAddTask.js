import React from "react";
import './ButtonAddTask.css';

function ButtonAddTask({
    icon,
    modalAdd,
    setModalAdd,
}){
    return(
        <button
        className='button-add-task'
        onClick={()=> setModalAdd(!modalAdd)}
        >
            <img
                alt='document icon'
                src={icon}
            />
        </button>
    );
}

export { ButtonAddTask }
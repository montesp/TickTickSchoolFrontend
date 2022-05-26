import './ButtonAddTask.css';

function ButtonAddTask({
    icon,
    modal,
    setModal,
}){
    return(
        <button
        className='button-add-task'
        onClick={()=> setModal(!modal)}
        >
            <img
                alt='document icon'
                src={icon}
            />
        </button>
    );
}

export { ButtonAddTask }
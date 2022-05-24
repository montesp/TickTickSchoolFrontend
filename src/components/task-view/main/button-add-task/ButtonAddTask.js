import './ButtonAddTask.css';

function ButtonAddTask({icon}){
    return(
        <button className='button-add-task'>
            <img
                alt='document icon'
                src={icon}
            />
        </button>
    );
}

export { ButtonAddTask }
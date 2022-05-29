import './Task.css';

import AcceptIcon from '../../../../assets/icons/check-circle.svg';
import DeleteIcon from '../../../../assets/icons/x.svg';
import CancelIcon from '../../../../assets/icons/slash.svg';

function Task({
    title,
    subject,
    state,
    description,
    onDelete,
    onComplete,
    completed,
}) {


    function stateComprobation(stateTask){
        let color = "" ;

        if(stateTask === "Terminado"){
            color = "task-state-text__completed";
        } else if (stateTask === "En proceso"){
            color = "task-state-text__progress";
        } else if (stateTask === "Sin empezar" ){
            color = "task-state-text__not-started";
        }

        return color;

    }

    const colorState = stateComprobation(state);


    return(
        <div className={`task ${completed && 'task__selected'}`}>
            <h4 className={`task-title  ${completed && 'task-title__selected'}`}>
                {title}
            </h4>
            <p className={`task-subject  ${completed && 'task-subject__selected'} `}>
                {subject}
            </p>
            <div className={`task-state__container ${completed && 'task-state__container__selected'} `}>
                <p className='task-state__text'>
                Estado:
                </p>
                <p className={`task-state__text task-state-text__container  ${colorState}`}>
                    {state}
                </p>
            </div>
            <p className={`task-description  ${completed && 'task-description__selected'} `}>
                {description}
            </p>
            <button
            className={`task-button task-completed-button  ${completed && 'task-completed-button__selected'} `}
            onClick={onComplete}
            >
                <img
                  alt='Check circle'
                  src={completed ? CancelIcon :AcceptIcon }
                />
            </button>
            <button
            className={`task-button task-deleted-button ${completed && 'task-deleted-button__selected'} `}
            onClick={onDelete}
            >
                <img
                    alt='delete'
                    src={DeleteIcon}
                />
            </button>
        </div>
    );
}

export { Task }
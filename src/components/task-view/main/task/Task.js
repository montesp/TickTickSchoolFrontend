import './Task.css';

import AcceptIcon from '../../../../assets/icons/check-circle.svg';
import DeleteIcon from '../../../../assets/icons/x.svg'

function Task() {
    return(
        <div className='task'>
            <h4 className='task-title'>
            Titulo tarea
            </h4>
            <p className='task-subject'>
            Nombre materias
            </p>
            <div className='task-state__container'>
                <p className='task-state__text'>
                Estado:
                </p>
                <p className='task-state__text task-state-text__container'>
                Terminado
                </p>
            </div>
            <p className='task-description'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien
            </p>
            <button className='task-button task-completed-button'>
                <img
                  alt='Check circle'
                  src={AcceptIcon}
                />
            </button>
            <button className='task-button task-deleted-button'>
                <img
                    alt='delete'
                    src={DeleteIcon}
                />
            </button>
        </div>
    );
}

export { Task }
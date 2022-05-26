import './AddTask.css';

function AddTask(){
    return(
        <form
        className='modal-task'
        >
            <label
            className='modal-title-label'
            htmlFor='title'
            >
                Titulo
            </label>
            <input
            className='modal-title-input'
            id='title'
            />

            <label
            className='modal-title-label'
            htmlFor='subject'
            >
                Materia
            </label>
            <input
            className='modal-title-input'
            id='subject'
            />

            <div className='status-container'>
                <label className='status-container__label'>Estado:</label>
                <select
                name='status'
                className='status-container__select'
                >
                    <option value="done">Terminado</option>
                     <option value="in-progress" selected>En proceso</option>
                    <option value="not-started">Sin empezar</option>
                </select>
            </div>
            <textarea
            className='description-label'
            autoCapitalize='sentences'
            /> 

            <div className='buttons-container'>
                <button
                type='button'
                className='button button-canceled'
                >
                Cancelar
                </button>
                <button
                type='button'
                className='button button-created'
                >
                Crear
                </button>
            </div>
            
           
        </form>
    );
}

export {AddTask};
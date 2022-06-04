import React from 'react';
import './AddTask.css';

function AddTask({
    modalAdd,
    setModalAdd,
    addTask,
}){
    const onCancel = () => {
        setModalAdd(!modalAdd)
    }

    const onSubmit = () => {
        const title = document.getElementById('title').value;
        const subject = document.getElementById('subject').value;
        const selected = onChange();
        const description = document.getElementById('description').value;
        addTask(title, subject, selected, description);
        onCancel()
    }

    const onChange = ()=> {
        var combo = document.getElementById("state");
        var selected = combo.options[combo.selectedIndex].text;
        return selected;
    }


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
                defaultValue="in-progress"
                name='status'
                id='state'
                className='status-container__select'
                onChange={onChange}
                >
                    <option value="done">Terminado</option>
                    <option value="in-progress" >En proceso</option>
                    <option value="not-started">Sin empezar</option>
                </select>
            </div>
            <textarea
            className='description-label'
            maxLength="500"
            id='description'
            />

            <div className='buttons-container'>
                <button
                type='submit'
                className='button button-canceled'
                onClick={onCancel}
                >
                Cancelar
                </button>
                <button
                type='button'
                className='button button-created'
                onClick={onSubmit}
                >
                Crear
                </button>
            </div>
        </form>
    );
}

export {AddTask};
import './AddSubject.css'

function AddSubject({
    setModalAddS,
    addSubject,
}) {



    const onSubmit = () => {
        const subject = document.getElementById('subject').value;
        const teacher = document.getElementById('teacher').value;
        const classroom = document.getElementById('classroom').value;
        console.log({subject, teacher, classroom});
        addSubject(subject, teacher, classroom);
        onCancel()
    }

    const onCancel = () => {
        setModalAddS(false);
    }

    return(
        <form
        className='modal-task'
        >
            <label
            className='modal-title-label'
            htmlFor='subject'
            >
                Nombre
            </label>
            <input
            className='modal-title-input'
            id='subject'
            />

            <label
            className='modal-title-label'
            htmlFor='teacher'
            >
                Profesor
            </label>
            <input
            className='modal-title-input'
            id='teacher'
            />


            <label
            className='modal-title-label'
            htmlFor='classroom'
            >
                Aula
            </label>
            <input
            className='modal-title-input'
            id='classroom'
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

export { AddSubject };
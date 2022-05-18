import './ButtonSide.css'

function ButtonSide({alt, src, text}){
    return(
        <div className='button-side'>
            <img
            alt={alt}
            src={src}
            className="button-side-icon"
            />
            <p className='button-side-title'>
                {text}
            </p>
        </div>
    );
}

export {ButtonSide};
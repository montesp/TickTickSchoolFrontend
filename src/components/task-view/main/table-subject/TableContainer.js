import './TableContainer.css';

function TableContainer({children}){
    return(
        <div className="table-container" >
            {children}
        </div>
    );
}

export { TableContainer }
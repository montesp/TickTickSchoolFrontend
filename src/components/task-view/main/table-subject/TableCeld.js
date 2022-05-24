import './TableCeld.css';

function TableCeld({text}) {
     return(
         <div className="celd">
            <p className='celd-text'>{text}</p>
         </div>
     );
 }

 export { TableCeld };
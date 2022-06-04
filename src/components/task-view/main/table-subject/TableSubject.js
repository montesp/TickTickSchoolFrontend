import React from 'react';
import './TableSubject.css';

function TableSubject({children}) {
     return(
         <div className="table">
            {children}
         </div>
     );
 }

 export { TableSubject };
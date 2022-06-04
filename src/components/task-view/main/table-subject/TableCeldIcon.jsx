import React from 'react';
import './TableCeldIcon.css'

function TableCeldIcon({
    icon,
    onDelete,
}) {
     return(
         <div className="celd-i">
            <button
            className='celd-icon-button'
            onClick={onDelete}
            >
                <img
                    className='celd-icon-button__icon'
                    alt='delete subject icon'
                    src={icon}
                />
            </button>
         </div>
     );
 }

 export { TableCeldIcon };
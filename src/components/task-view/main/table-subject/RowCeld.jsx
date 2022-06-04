import React from 'react';


import './RowCeld.css';
import './TableCeldIcon.css';
import { TableCeld } from "./TableCeld";
import { TableCeldIcon } from './TableCeldIcon';

// Icons

function RowCeld({
    subject,
    teacher,
    classroom,
    icon,
    onDelete,
}) {
     return(
         <div className='celd-row'>
            <TableCeld
                text={subject}
            />
             <TableCeld
                text={teacher}
            />
             <TableCeld
                text={classroom}
            />
            <TableCeldIcon
                icon={icon}
                onDelete={onDelete}
            />
         </div>
     );
 }

 export { RowCeld };
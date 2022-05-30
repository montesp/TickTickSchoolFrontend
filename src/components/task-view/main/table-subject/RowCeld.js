import './RowCeld.css';
import { TableCeld } from "./TableCeld";
import { TableCeldIcon } from './TableCeldIcon';

// Icons

function RowCeld({
    subject,
    teacher,
    classroom,
    icon,
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
            />
         </div>
     );
 }

 export { RowCeld };
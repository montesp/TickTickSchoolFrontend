import './RowCeld.css';
import { TableCeld } from "./TableCeld";


function RowCeld({
    subject,
    teacher,
    classroom,
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
         </div>
     );
 }

 export { RowCeld };
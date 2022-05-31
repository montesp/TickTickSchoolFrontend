import './RowCeld.css';
import './TableCeldIcon.css'
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
         </div>
     );
 }

 export { RowCeld };
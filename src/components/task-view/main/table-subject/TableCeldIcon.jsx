import './TableCeldIcon.css'

function TableCeldIcon({
    icon,
}) {
     return(
         <div className="celd-i">
            <button className='celd-icon-button'>
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
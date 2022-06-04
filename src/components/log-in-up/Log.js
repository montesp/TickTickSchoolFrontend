
import React from 'react';
import './Log.css';

function Log({children}){
    return(
        <div className='log'>
            {children}
        </div>
    );
}

export {Log};
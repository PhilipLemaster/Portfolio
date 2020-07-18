import React from 'react';
import './style.css';

function ContactCard() {
    return(
        <div className='contactWhole'>
            <h1 className='contactHead'>Contact Me</h1>
            <div className='contactBody'>
                <h3 id='phone'>(980)355-1739</h3>
                <h3 id='email'>philiplemaster@yahoo.com</h3>
            </div>
        </div>
    )
    
}

export default ContactCard;
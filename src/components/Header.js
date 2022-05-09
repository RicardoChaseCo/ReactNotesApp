import React from 'react';


const Header = ({handleToggleDarkMode}) => {
    return(
        <div className='header'>
            <h1>Notes App</h1>
            <button onClick={()=> handleToggleDarkMode((prev)=> !prev)} className='save'>Toggle Mode</button>
        </div>
    )
}

export default Header;

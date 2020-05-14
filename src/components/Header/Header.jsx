import React from 'react';
import classes from './Header.module.css' //object

const Header = () => {
    return (
        <header className={classes.header}> 
        <img src="https://img.icons8.com/material/4ac144/256/user-male.png" />
      </header>
    )
}

export default Header;
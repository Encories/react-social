import React from 'react';
import classes from './Navbar.module.css'; //object
import {NavLink} from "react-router-dom";

const Navbar = () => {
    //<NavLink to> is SPA analog for <a href>
    return (
        <nav className={classes.nav}>
            <div className="profile">
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className="messages">
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className="news">
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
      
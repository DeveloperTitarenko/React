import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/friendsList";

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName = {classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName = {classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName = {classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName = {classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/setting' activeClassName = {classes.activeLink}>Setting</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' activeClassName = {classes.activeLink}>Friends</NavLink>
                <FriendsList/>
            </div>
        </nav>
    )
}
export default Navbar;
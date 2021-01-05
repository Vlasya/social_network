import React from "react";
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.nav_link}  to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink className={s.nav_link} to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            <NavLink className={s.nav_link} to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink className={s.nav_link} to="/music" activeClassName={s.active}>Music</NavLink>
            <NavLink className={s.nav_link} to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>


    )
}

export default Sidebar;
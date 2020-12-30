import React from "react";
import s from "./Sidebar.module.css"

const Sidebar =()=>{
    return(
            <div className={s.wrapper}>
                <a className={`${s.nav_link} ${s.active}`}  href="/profile">Profile</a>
                <a className= {s.nav_link} href="/dialogs">Messages</a>
                <a className= {s.nav_link} href="/news">News</a>
                <a className= {s.nav_link} href="/music">Music</a>
                <a className= {s.nav_link} href="/settings">Settings</a>
            </div>


    )
}

export default  Sidebar;
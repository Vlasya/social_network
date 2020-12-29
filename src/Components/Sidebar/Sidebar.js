import React from "react";
import s from "./Sidebar.module.css"

const Sidebar =()=>{
    return(
        <div className='sidebar'>
            <div className={s.wrapper}>
                <a className={`${s.nav_link} ${s.active}`}  href="#s">Profile</a>
                <a className= {s.nav_link} href="#s">Messages</a>
                <a className= {s.nav_link} href="#s">News</a>
                <a className= {s.nav_link} href="#s">Music</a>
                <a className= {s.nav_link} href="#s">Settings</a>
            </div>
        </div>

    )
}

export default  Sidebar;
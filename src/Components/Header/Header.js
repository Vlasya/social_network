import React from "react";
import s from "./Header.module.css"

const Header =()=>{
    return(
        <div className='header'>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <img  src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
                </div>

            </div>
        </div>

    )
}


export default Header;
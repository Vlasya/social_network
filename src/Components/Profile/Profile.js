import React from "react";
import s from "./Profile.module.css"
import Posts from "./Posts/Posts";

const Profile=(props)=>{
    return(
            <div className={s.wrapper}>
                <div className={s.header}></div>
                <div className={s.user_info}>
                    <div className={s.user_photo}>
                        <img src="https://cdn.the-scientist.com/assets/articleNo/66065/iImg/32456/uploads/credit_zana%20clay_luikotale%20bonobo%20project.png" alt="photo"/>
                    </div>
                    <div className={s.user_data}>
                        <h2 className={s.user_name}> Ivan Ivanov</h2>
                        <p className={s.user_information}>Date of Birth :</p>
                        <p className={s.user_information}> City :</p>
                        <p className={s.user_information}> Education :</p>
                        <p className={s.user_information}> Web-site :</p>
                    </div>
                </div>
                <Posts/>

            </div>




    )
}

export default Profile;
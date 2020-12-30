import React from "react";
import s from "./Post.module.css"

const Post =(props)=>{
    return(
        <div className={s.wrapper}>
            <div className={s.message}>
                <div className={s.avatar}>
                    <img src="https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg" alt="avatar"/>
                </div>
                <div className={s.text}>
                    {props.message}
                </div>
            </div>
            <div className={s.rating}>
                <div className={s.rating_like}>
                    <span>{props.like}</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Facebook_like_thumb.png/1200px-Facebook_like_thumb.png" alt=""/>
                </div>
                <div className={s.rating_dislike}>
                    <span>{props.dislike}</span>
                    <img src="https://images.techhive.com/images/article/2015/11/dislike_facebook-100627022-large.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Post;
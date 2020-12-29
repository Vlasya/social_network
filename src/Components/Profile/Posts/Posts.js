import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts =()=>{
    return(
        <div className={s.wrapper}>
            <h2 className={s.title}> My Posts</h2>
            <div className={s.posts_form}>
                <textarea  className={s.textarea} name="" id="" cols="100" rows="5" placeholder="Your news..."></textarea>
                <button className={s.btn_form}> Send</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts;
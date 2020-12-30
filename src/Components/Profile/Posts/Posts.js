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
            <Post message='Hello' like='4' dislike='0'/>
            <Post message='How are you?' like='6' dislike='1'/>
            <Post message='I am OK' like='10' dislike='5'/>
        </div>
    )
}

export default Posts;
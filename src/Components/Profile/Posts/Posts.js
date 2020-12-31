import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts =(props)=>{
    let postData=[
        {id:1, post:'Hello', likesCount:12,dislikesCount:0},
        {id:2, post:'How are you?', likesCount:2,dislikesCount:1},
        {id:3, post:'I am OK',likesCount:7,dislikesCount:133}
    ]
    let posts=
        postData.map(post =><Post message={post.post}like={post.likesCount} dislike={post.dislikesCount}/>)

    return(
        <div className={s.wrapper}>
            <h2 className={s.title}> My Posts</h2>
            <div className={s.posts_form}>
                <textarea  className={s.textarea} name="" id="" cols="100" rows="5" placeholder="Your news..."></textarea>
                <button className={s.btn_form}> Send</button>
            </div>
             {posts}
        </div>
    )
}

export default Posts;
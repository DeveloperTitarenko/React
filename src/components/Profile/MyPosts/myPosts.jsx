import React from "react";
import classes from './myPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', like: 252},
        {id: 2, message: "It's my first post", like: 389},
        {id: 3, message: "hello world!!!", like: 1240}
    ]
    let postsElements = posts.map(p => <Post massage={p.message} like={p.like}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea name="" id="" cols="50" rows="2"></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>New post</div>
            {postsElements}
        </div>
    )
}
export default MyPosts;



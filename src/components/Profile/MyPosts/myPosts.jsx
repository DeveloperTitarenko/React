import React, {useState} from "react";
import classes from './myPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({ posts }) => {

    const postsElements = posts.map(post => <Post massage={post.message} like={post.like}/>)

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



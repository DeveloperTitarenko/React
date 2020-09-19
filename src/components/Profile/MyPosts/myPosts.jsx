import React from "react";
import classes from './myPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', like: 252},
        {id: 2, message: "It's my first post", like: 389}
    ]
    return (
            <div className={classes.postsBlock}>
               <h3>My post</h3>
                <div>
                    <div><textarea name="" id="" cols="50" rows="2"></textarea></div>
                    <div><button>Add Post</button></div>
                </div>
                <div>New post</div>
                <Post massage={postData[0].message} like ={postData[0].like}/>
                <Post massage={postData[1].message} like ={postData[1].like}/>
            </div>
    )
}
export default MyPosts;



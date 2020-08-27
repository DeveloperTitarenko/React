import React from "react";
import classes from './myPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    <textarea name="" id="" cols="50" rows="2"></textarea>
                    <button>Add Post</button>
                </div>
                <div>New post</div>
                <Post massage='Hi, how are you?' like = '2'/>
                <Post massage="It's my first post" like = '5'/>
            </div>
    )
}
export default MyPosts;



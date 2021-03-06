import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, addPost }) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost = {addPost}/>
        </div>
    )
}
export default Profile;



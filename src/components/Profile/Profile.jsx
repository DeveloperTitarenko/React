import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default Profile;



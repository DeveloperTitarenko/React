import React from "react";
import classes from './Profile.module.css';
import myPosts from "./MyPosts/myPosts";
import MyPosts from "./MyPosts/myPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
        )
}
export default Profile;



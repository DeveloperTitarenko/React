import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {posts} from '../../index';

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}
export default Profile;



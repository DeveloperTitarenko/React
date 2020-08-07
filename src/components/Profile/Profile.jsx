import React from "react";
import classes from './Profile.module.css';
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>New post</div>
            </div>
            <div className={classes.item}>Post 1</div>
            <div className={classes.item}>Post 2</div>
            <div className={classes.item}>Post 3</div>
            <div className={classes.item}>Post 4</div>
        </div>
        )
}
export default Profile;



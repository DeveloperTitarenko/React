import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return(
    <>
        <div>
            <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>
    </>
    )
}
export default ProfileInfo;
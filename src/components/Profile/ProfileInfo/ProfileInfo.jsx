import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return(
    <>
        <div>
            <img src="https://gaimernet.3dn.ru/_ld/3/86368313.jpg" alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>
    </>
    )
}
export default ProfileInfo;
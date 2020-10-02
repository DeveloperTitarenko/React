import React from "react";
import classes from './friendsList.module.css';
const FriendsList = () => {
    return(
        <ul className={classes.friendsList}>
            <li>
                <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt=""/>
                <span>Semen</span>
            </li>
            <li>
                <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt=""/>
                <span>Alexey</span>
            </li>
            <li>
                <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt=""/>
                <span>Anna</span>
            </li>
        </ul>
    )
}
export default FriendsList;
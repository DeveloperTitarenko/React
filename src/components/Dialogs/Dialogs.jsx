import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog}  ${classes.active}`}>
                    Vlad
                </div>
                <div className={classes.dialog}>
                    Semen
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Irina
                </div>
                <div className={classes.dialog}>
                    Alex
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>See you</div>
                <div className={classes.message}>Nice to meet ypu</div>
                <div className={classes.message}> Good morning</div>
            </div>
        </div>
    )
}

export default Dialogs;
import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return(
            <div className={`${classes.dialog}  ${classes.active}`}>
                <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
            </div>
        )
}

const Message = ({message}) => {
    return <div className={classes.message}>{message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1 ,name: 'Vlad'},
        {id: 2 ,name: 'Semen'},
        {id: 3 ,name: 'Alexey'},
        {id: 4 ,name: 'Irina'},
        {id: 5 ,name: 'Sergey'},
    ]
    let messageData = [
        {id: 1 ,message: 'Hi'},
        {id: 2 ,message: 'How are you'},
        {id: 3 ,message: 'See you'},
        {id: 4 ,message: 'Nice to meet you'},
        {id: 5 ,message: 'Good morning'},{}
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>
                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
                <DialogItem name = {dialogsData[4].name} id = {dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs;

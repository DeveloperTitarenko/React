import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from  "./Message/Message"

const Dialogs = (props) => {
    let dialogs = [
        {id: 1 ,name: 'Vlad'},
        {id: 2 ,name: 'Semen'},
        {id: 3 ,name: 'Alexey'},
        {id: 4 ,name: 'Irina'},
        {id: 5 ,name: 'Sergey'},
    ]

    let messages = [
        {id: 1 ,message: 'Hi'},
        {id: 2 ,message: 'How are you'},
        {id: 3 ,message: 'See you'},
        {id: 4 ,message: 'Nice to meet you'},
        {id: 5 ,message: 'Good morning'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name = {d.name} id = {d.id}/>)

    let messageElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;

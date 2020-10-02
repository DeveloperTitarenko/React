import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from  "./Message/Message"

const Dialogs = ({ state }) => {

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)

    let messageElements = state.messages.map(m => <Message message={m.message}/>)

    let referenceMessages = React.createRef();
    let addMessage = () => {
        alert(referenceMessages.current.value);
        referenceMessages.current.value = '';
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={referenceMessages} cols="50" rows="2"></textarea>
                <button onClick={addMessage}>add messages</button>
            </div>
        </div>
    )
}

export default Dialogs;

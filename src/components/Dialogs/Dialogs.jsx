import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogData = [
        {id: 0, name: 'Voff4ks'},
        {id: 1, name: 'Dashas'},
        {id: 2, name: 'Kates'}
        ];

    let messagesData =[
        {id: 0, message: 'Hi!!'},
        {id: 1, message: 'BOO!!'},
        {id: 2, message: 'WAZZZAAA!!'}
        ];

    // Converts incoming objects to JSX markup by mapping one array to another
    let dialogElements = dialogData.map( (el) => {
        return <DialogItem name={el.name} id={el.id}/>
    } )

    let messageElements = messagesData.map( (el) => {
        return <Message message={el.message}/>
    } )


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;
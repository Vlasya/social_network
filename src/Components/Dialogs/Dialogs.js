import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialodsData=[
        {id:1, name:'Andrey'},
        {id:2, name:'Anna'},
        {id:3, name:'Artem'},
        {id:4, name:'Max'},
    ]
    let messagesData=[
        {id:1, message:'Hi'},
        {id:2, message:'How are you doing'},
        {id:3, message:'i am doing something'}
    ]
    let dialogs= dialodsData.map(dialog =><Dialog name={dialog.name} id={dialog.id}/>)
    let message= messagesData.map(message =><Message message={message.message} />)
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialogs;
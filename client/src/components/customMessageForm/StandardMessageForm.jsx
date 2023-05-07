import React from 'react'
import { useState } from 'react';
// import $ from 'jquery';
// import $ from 'jquery';
// import CloseIcon from '@mui/icons-material/Close';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import SendIcon from '@mui/icons-material/Send';
// import Dropzone from 'react-dropzone';
import MessageFormUI from "./MessageFormUI"

const StandardMessageForm = ({ props, activeChat }) => {

    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");

    const handleChange = (e) => setMessage(e.target.value)

    const handleSubmit = async () => {
        const date = new Date().toISOString().replace("T", " ").replace("Z", `${Math.floor(Math.random()*1000)}+00:00`);
        const at = attachment ? [{ blob : attachment, file : attachment.name}] : [] ;
        const form = {
            attachment: at,
            created: date,
            sender_name: props.username,
            text: message,
            activeChatId : activeChat.id
        }

        // console.log('form data:', form);
        
        props.onSubmit(form);
        setMessage("");
        setAttachment("");

    };

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
 
export default StandardMessageForm
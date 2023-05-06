import React from 'react'
import { useState } from 'react';
import $ from 'jquery';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Dropzone from 'react-dropzone'

const StandardMessageForm = ({ props, activeChat }) => {
    console.log('props', props);
    console.log('activeChat', activeChat);
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

    const handleChange = (e) => setMessage(e.target.value)

    const handleSubmit = async () => {
        const date = new Date().toISOString().replace("T", " ").replace("Z", $`{Math.floor(Math.random()*1000)}+00:00`);
        const at = attachment ? [{ blob : attachment, file : attachment.name}] : [] ;
        const form = {
            attachment: at,
            created: date,
            sender_name: props.username,
            text: message,
            activeChatId : activeChat.id
        }

        console.log('form data:', form);
        props.onSubmit(form);
        setMessage("");
        setAttachment("");

    };

  return (
    <div className='message-form-container'>
        {preview && (
            <div className="message-form-preview">
                <img 
                  src={preview} 
                  onLoad={() =>URL.revokeObjectURL(preview)} 
                  alt="message-form-preview" 
                  className="message-form-preview-image"
                />
                <CloseIcon
                  className='messsage-form-icon-X'
                  onClick={() => {
                    setPreview("");
                    setAttachment("");
                  }}
                />
            </div>
        ) }
        <div className="message-form">
            <div className="message-form-input-container">
                <input
                  className='message-form-input'
                  type='text'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Send a message...'
                />
            </div>
            <div className="message-form-icons">
                <Dropzone
                  acceptedFiles=".jpeg,.jpg,.png"
                  multiple={false}
                  noClick={true}
                  onDrop={(acceptedFiles) => {
                    setAttachment(acceptedFiles[0]);
                    setPreview(URL.createObjectURL(acceptedFiles[0]));
                  }}
                >
                    {({ getRootProps, getInputProps, open }) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <AttachFileIcon
                              className='message-form-icon-clip'
                              onClick={open}
                            />
                        </div>
                    )}
                
                </Dropzone>

                <hr className="vertical-line" />
                <SendIcon 
                  className="message-form-icon-airplane"
                  onClick={() => {
                    setPreview("");
                    handleSubmit();
                  }}
                />

            </div>
        </div>
    </div>
  )
}
 
export default StandardMessageForm
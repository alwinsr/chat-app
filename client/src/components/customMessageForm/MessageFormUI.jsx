import React from 'react'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Dropzone from 'react-dropzone';

export const MessageFormUI = ({
    setAttachment,
    message,
    handleChange,
    handleSubmit,
}) => {
    const [preview, setPreview] = useState("");
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
                  onChange={handleChange}
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

export default MessageFormUI;

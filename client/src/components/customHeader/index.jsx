import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PhoneIcon from '@mui/icons-material/Phone';

function  CustomerHeader({ chat }) {
  return (
    <div>
      <div className='chat-header'>
      <div className="flex-betweem">
        <ChatBubbleIcon className='icon-chat  h-6 w-6'/>
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flex-between">
        <PhoneIcon className='phone-icon  h-6 w-6'/>
        {chat.description != "⬅️ ⬅️ ⬅️" ? 
         (<p className="header-text">{chat.description}</p>) :
          (<p className='header-text'>no chat selected</p>)}
      </div>

    </div>
    </div>
  )
}

export default CustomerHeader

import React from 'react'
import { 
    useMultiChatLogic, 
    MultiChatSocket, 
    MultiChatWindow,
     
} from 'react-chat-engine-advanced';
import Header from "../customHeader";
import StandardMessageForm from "../customMessageForm/StandardMessageForm"


const Chat = () => {
    const chatProps = useMultiChatLogic(
        "4193df35-550a-46d3-9581-30f704154eb4",
        // import.meta.env.VITE_PROJECT_ID,
        "testuser",
        "1234" 
    )
  return (
    <div  style={{flexBasis: "100%"}}>
        <MultiChatSocket { ...chatProps} />
        <MultiChatWindow
            {...chatProps}
            style={{height: "100vh"}}
            renderChatHeader={(chat) => <Header chat={chat} />}
            renderMessageForm={(props) => {
                return(
                    <StandardMessageForm props={props} activeChat={chatProps.chat} />
                )
            }}
        />
    </div>
  )
};

export default Chat

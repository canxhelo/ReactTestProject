import React, { useState } from 'react';
import ChatList from './ChatList/ChatList';
import ChatWindow from './ChatWindow/ChatWindow';
import Notifications from './Notifications/Notifications';

const Chat = () => {
  const [chat, setChat] = useState(true);
  const [isUserListOpen, setIsUserListOpen] = useState(false);

  const toggleUserList = () => {
    setIsUserListOpen(!isUserListOpen);
  }
  const openChat = () => {
    setChat(!chat);
  };

  return (
    <>
      <button onClick={openChat}>Open Chat</button>


      {chat ? (
      <div className='chat-container' style={{display:'flex'}}>

      <ChatList isUserListOpen={isUserListOpen} toggleUserList={toggleUserList}  />
      <ChatWindow />
      <Notifications />
      </div>
      ) : (
      <div></div>
      )}

    </>
  );
};

export default Chat;

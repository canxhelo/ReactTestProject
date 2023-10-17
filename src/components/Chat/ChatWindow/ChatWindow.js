import React from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const ChatWindow = () => {

  return (
    <div className="chat-window">
      <div className="messages">
        {/* Dummy data for demonstration */}
        <Message content="Hello there!" type="incoming" />
        <Message content="Hey! How are you?" type="outgoing" />
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;


import React from 'react';

const ChatList = ({ isUserListOpen, toggleUserList }) => {

  return (

    <div className="chat-sidebar">
      <button onClick={toggleUserList}>Toggle Sidebar</button>
      {isUserListOpen&&
      (
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>)}
    </div>
  );
};

export default ChatList;

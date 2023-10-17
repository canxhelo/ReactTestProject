import React from 'react';

const Message = ({ content, type }) => {
  
  return (
    <div className={`message ${type}`}>
      <p>{content}</p>
    </div>
  );
};

export default Message;

import React, { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Logic to send message
    console.log('Sent:', message);
    setMessage('');  // Clear the input
  };

  return (
    <div className="message-input">
      <input 
        type="text" 
        value={message} 
        onChange={e => setMessage(e.target.value)} 
        placeholder="Type your message..." 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;

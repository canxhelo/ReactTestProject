import React, { useState } from 'react';

const Notifications = () => {
  const messages = 'You have a new message from User 1!';
  const [notifications, GetNotifications] = useState(messages)
  console.log(notifications);
  const ClearNotifications=() => {
    GetNotifications('');

  };
  return (
    <div className="notifications">
      {!notifications?(<div> You doesnt have new notifications</div>):(
        <div><button className='button' onClick={ClearNotifications}></button>{notifications}</div>)}
    </div>
  );
};

export default Notifications;

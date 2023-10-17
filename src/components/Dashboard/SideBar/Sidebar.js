import React, { useState } from 'react';
import './Sidebar.css'

const SidebarComponent = ({userRole}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>{isOpen ? 'Close' : 'Open'} Sidebar</button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <h2>Navigation</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#home">Chat</a></li>
        {userRole === 'Administrator' && (
          <>
            <li><a href="#home">Manage Departments</a></li>
            <li><a href="#home">Manage Employees</a></li>
          </>
        )}
        {userRole === 'Employee' && (
          <li><a href="#home">My Profile</a></li>
        )}
      </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;


import SidebarComponent from "./SideBar/Sidebar";
import React, { useState } from "react";
import './Dashboard.css';
import DepartmentTree from "./DepartmentTree/DepartmentTree";
import EmployeeList from "./Employee/EmployeeList";
import Chat from "../Chat/Chat";

const departments = [
    { id: 1, name: 'HR', children: [] },
    { id: 2, name: 'Tech', children: [] },
    { id: 3, name: 'Frontend', children: [] },
    { id: 4, name: 'Backend', children: [] }
];

const employees = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'Frontend' },
    { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR' },
];
const Dashboard = ({ userRole }) => {
    const [dashboard, setDashBoard] = useState(false)
    const [employee, setEmployee] = useState(false)


    const handleDashborboard = () => {
        setDashBoard(!dashboard);
    };
    const handleEmoloyee = () => {
        setEmployee(!employee);
    };

    return (
        <div className="dashboard">
            <SidebarComponent userRole={userRole} />

            <header className="dashboard-header">
                <h1>Welcome to the Dashboard</h1>
                <button>Logout</button>
            </header>

            {userRole === 'Administrator' && (
                <div className="admin-controls">
                    <h2>Admin Controls</h2>
                    <div className="buttons">


                        <button onClick={handleDashborboard}>Manage Departments</button>

                        {dashboard && <DepartmentTree departments={departments} />}

                        <button onClick={handleEmoloyee}>Manage Employees</button>
                        {employee && <EmployeeList employees={employees} />}
                    </div>
                </div>


            )}

            <div className="chat-section">
                <Chat></Chat>

            </div>

            {userRole === 'Employee' && (
                <div className="employee-profile">
                    <h2>My Profile</h2>
                </div>
            )}
        </div>
    );







};



export default Dashboard;

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
function App() {


  const handleLogin = (username, password) => {
    // Send the credentials to the server for validation
    // For now, we just log them (in a real scenario, never log passwords)
    console.log("Attempting to login with:", username,password);
  };
  return (
    <div className="App">
      <div className="app-container">
      <Login onLogin={handleLogin} />
    </div>
    <Dashboard userRole={'Administrator'}/>
    </div>
  );
}

export default App;

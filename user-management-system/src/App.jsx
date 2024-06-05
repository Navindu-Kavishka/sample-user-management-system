import { useNavigate } from 'react-router-dom';

import './App.css'

function App() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/users");
  };

  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>Welcome to User Management System</h1>
          <button className="userBtn" onClick={handleUserClick}>
            Users
          </button>
        </div>
      </div>
    </>
  );
}

export default App

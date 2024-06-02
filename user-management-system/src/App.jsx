import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>Welcome to User Management System</h1>
          <button className='userBtn'>Users</button>
        </div>
      </div>
    </>
  )
}

export default App

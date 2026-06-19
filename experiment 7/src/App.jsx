import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Student from './components/Student'
function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Student Information</h1>

      <Student name="Rahul Sharma"  course="Computer Science"       marks={85} />
      <Student name="Anita Verma"   course="Information Technology" marks={92} />
      <Student name="Rohan Gupta"   course="Electronics"            marks={78} />
      <p>Name:PRIYANSHI PADNEY <br /> Branch:ECE-2 <br />Roll No.:2503203100092</p>
    </div>
  )
}

export default App

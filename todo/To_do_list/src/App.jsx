import { useState } from 'react'
import { Input } from './components/input'
import './App.css'

function App() {

  const[Task,setTask]=useState("")

  const run =()=>{
    setTask(Task)
    console.log(Task)
  }

  return (
    <div>
      <Input  setTask={setTask} Task={Task}/>
      <button onClick={run}>Submit</button>

    </div>
  )
}

export default App

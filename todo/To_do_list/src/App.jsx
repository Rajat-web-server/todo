import { useState } from 'react'
import { Input } from './components/input'
import { Display } from './components/Display'
import './App.css'

function App() {

  const[Task,setTask]=useState("")
  const[Submit_Task,setSubmit_Task]=useState("")

  const submit =()=>{
    setSubmit_Task(Task)
    console.log(Task)
  }

  return (
    <div>
      <Input  setTask={setTask} Task={Task}/>
      <button onClick={submit}>Submit</button>
     <Display Task={Submit_Task} />
    </div>
  )
}

export default App

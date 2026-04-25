import { useState } from 'react'
import { useEffect } from 'react'

import { Input } from './components/input'
import { Display } from './components/Display'
import './App.css'

function App() {

  const[Task,setTask]=useState("")
  const [TaskList, setTaskList]=useState([])
  const[Submit_Task,setSubmit_Task]=useState("")

  useEffect(() => {
  console.log("Updated Submit Task:", Submit_Task);
}, [Submit_Task]);

useEffect(() => {
  console.log("Updated TaskList:", TaskList);
}, [TaskList]);

  const submit =()=>{
    
    setSubmit_Task(Task);
    setTaskList([...TaskList,Task]);
  }
 

  return (
    <div>
      <Input  setTask={setTask} Task={Task}/>
      <button onClick={submit}>Submit</button>
      {TaskList.map((T,index)=>{
        console.log("bug");
       return <Display key={index} Task={T}  />
      })}
     
    </div>
  )
}

export default App

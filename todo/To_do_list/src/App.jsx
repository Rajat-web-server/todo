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

  const updateTaskList=(index,newTask)=>{
    const updated_Task = [...TaskList];
    updated_Task[index]=newTask;
    setTaskList(updated_Task);
    {console.log("updated Task : ",updated_Task)}
  }

  const submit =()=>{
    
    setSubmit_Task(Task);
    setTaskList([...TaskList,Task]);
    setTask("")
  }

    const deleteTask = (index)=>{
      const filter_task = TaskList.filter((_,i)=>i!=index);
      setTaskList(filter_task)
    }
 

  return (
    <div>
      <Input  setTask={setTask} Task={Task}/>
      <button onClick={submit}>Submit</button>
      {TaskList.map((T,index)=>{
        // console.log("bug");
       return <Display index={index} Task={T} setTask={setTask} updateTaskList={updateTaskList} deleteTask={deleteTask}  />
      })}
     
    </div>
  )
}

export default App

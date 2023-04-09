import { useState } from "react"
import {Task} from './Task.js'
export const ToDoList=()=>{
    const [newText,setNewText]=useState("")
    const [addNewTask,setAddNewTask]=useState([])
    const trackText=(event)=>{
        setNewText(event.target.value)
    }
    const addTask=()=>{
        const task={
            id:addNewTask.length==0?1:addNewTask[addNewTask.length-1].id+1,
            taskName:newText
        }
        setAddNewTask([...addNewTask, task])
    }
    const removeTask=(id)=>{
        setAddNewTask(addNewTask.filter((tsk)=>{return tsk.id!==id}))
    }
    const removeAll=()=>{
        setAddNewTask([])
    }
    return<div className="container">
        <div>
            <h1 style={{color:"blue"}}>Osama Todo List</h1>
        </div>
        <div id="newtask">
            <input className="" placeholder="Add Today's Task"  onChange={trackText}></input>
            <button className="" onClick={addTask}>Add</button>
        </div>
        <div>
            {addNewTask.map((tasks)=>{
                return <Task taskName={tasks.taskName} id={tasks.id} removeTask={removeTask}></Task>})}
        </div>
        {addNewTask.length>=1&&<button className="removeAll" onClick={removeAll}>Remove All</button>}   
    </div>
}
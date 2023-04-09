import React from 'react'

export const Task = (props) => {
  return <div className="task">
  <h1 id="task">{props.taskName}</h1> 
  <button className="" onClick={()=>props.removeTask(props.id)}>X</button>
</div>
}

export default Task

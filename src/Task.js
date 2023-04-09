import React from 'react'

export const Task = (props) => {
  return <div className="task">
  <h1 id="task" style={{color:props.completed&&"green"}}>{props.taskName}</h1> 
  <button id="complete" onClick={()=>props.completeTask(props.id)}>Complete</button>
  <button id="remove" onClick={()=>props.removeTask(props.id)}>Remove</button>
</div>
}

export default Task

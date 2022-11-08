import React from 'react'

const Tasks = ({tasksadded}) => {
  return (
    <div>{tasksadded.map((task,index)=>
    <div key={index}><p>{task}</p></div>)}</div>
  )
}

export default Tasks
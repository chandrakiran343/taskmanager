import React from 'react'
import './style.css';
//import { ChakraProvider } from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react'
import Tasks from './Tasks'

function InputComponent(props) {
  
  
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState('')
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTasks = [...tasks, input]
    setTasks(newTasks)
    setInput('')
  }


  return (
    <div className='container'>
      <div className='box'>
        <Input className='input'
          id="input-box"
          placeholder='Enter the task to be added'
          name='text'
          onChange={handleChange}
          value={input} />
        
        <Button type='submit'
          onClick={handleSubmit}
          className="button"
          id='button'>Click</Button>
                
        <Tasks tasksadded={tasks} />
      </div>
    </div>
  )
}


export default InputComponent;

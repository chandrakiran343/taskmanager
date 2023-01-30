import React from 'react'
import './style.css';
//import { ChakraProvider } from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react'
import Tasks from './Tasks'
import axios from 'axios';

function InputComponent(props) {
  
  const [flag, setFlag] = React.useState(false)
  const [index, setIndex] = React.useState(null)
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState('')
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const fetchTasks = () => {
    axios.get('http://localhost:5505/tasks')
      .then((res) => {
        console.log(666)
        setTasks(res.data.tasks)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(333);
  }

  // React.useEffect(() => {
  //   
  // }, [tasks]);
  const handleSubmit = async (e) => {
    
    if (tasks.length < 10) {

      if (flag) {
        let rip = tasks;
        rip[index].name = input;
        setTasks(rip)
        setFlag(false)
        await axios.patch(`http://localhost:5505/tasks/${rip[index]._id}`, { name: input })
        setInput('')
        return null;
      } 
      // setTasks([...tasks, { task: input, id: Math.random() }])
      // setInput('')
      await axios.post('http://localhost:5505/tasks', { name: input, completed: false });
    }
    fetchTasks();
  }

  React.useEffect(() => {
    fetchTasks();
    console.log(666)
  }, []);


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
          onClick={() => {
            handleSubmit();
            setInput("");
          }}
          className="button"
          colorScheme="blue"
          id='button'>{flag?"Make Edit":"Submit" }</Button>
                
        <div className='taskscontainer'>
          <Tasks tasksadded={tasks} setFlag={setFlag} setIndex={setIndex} setInput={setInput} setTasks={setTasks} />
        </div>  
      </div>
    </div>
  )
}


export default InputComponent;

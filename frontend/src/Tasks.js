import React,{useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'
import { Button,ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import "./tasks.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Tasks = ({ tasksadded, setTasks, setInput, setFlag, setIndex }) => {
  
  const nav = useNavigate();

  const onDelete = async (id) => {
    console.log(tasksadded, id);
    tasksadded = tasksadded.filter((element, index) => element._id !== id)
    await axios.delete(`http://localhost:5505/tasks/${id}`);
    setTasks(tasksadded)
  }

  const onDone = async (id) => { 
    document.getElementById(id).style.textDecoration = "line-through";
    await axios.patch(`http://localhost:5505/tasks/${id}`, { completed: true })
  }

  const onEdit = async (id,index) => {  
    setInput(tasksadded[index].name)
    setFlag(true)
    setIndex(index)

  }

  
  return (
    <>
      {tasksadded.length >0 &&tasksadded.map((element, index) => {
        
        
        return <Card style={{ textDecoration: element.completed?"line-through":""}} key={element._id} /*onClick={()=>nav(`/edit/${element._id}`)}*/ id={element._id} className='cardstyle' >
          
          <CardHeader autoCapitalize='characters' fontSize={"2xl"}>{element.name}</CardHeader>
          
          <Text fontSize={"xl"}>Task {index + 1}</Text>
          
          <ButtonGroup alignContent={"center"}>
            <Button onClick={() => onDone(element._id)} colorScheme="green">Done</Button>
            <Button onClick={() => onEdit(element._id,index)} colorScheme="blue">Edit</Button>
            <Button onClick={() => onDelete(element._id)} colorScheme="red">Delete</Button>
          </ButtonGroup>
        
        </Card> 
      })}
    </>
    
  )
}

export default Tasks
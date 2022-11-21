import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'
import { Button,ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import "./tasks.css"
const Tasks = ({tasksadded, setTasks}) => {
  
  const onDelete = (id) => {
    tasksadded = tasksadded.filter((task, index) => index !== id)
    setTasks(tasksadded)
  }

  const onDone = (id) => { 
    document.getElementById(id).style.textDecoration = "line-through"
  }

  
  return (
    <>
      {tasksadded.map((task, index) => {
        
        
        return <Card key={index} id={index  } className='cardstyle' >
          
          <CardHeader autoCapitalize='characters' fontSize={"5xl"}>{task}</CardHeader>
          
          <Text fontSize={"xl"}>Task {index + 1}</Text>
          
          <ButtonGroup alignContent={"center"}>
            <Button onClick={()=>onDone(index)} colorScheme="green">Done</Button>
            <Button onClick={() => onDelete(index)} colorScheme="red">Delete</Button>
          </ButtonGroup>
        
        </Card>
      })}
    </>
    
  )
}

export default Tasks
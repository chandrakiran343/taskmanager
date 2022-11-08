import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'

function Inputbox() {
      return (
        <ChakraProvider>

          < Input placeholder='Enter text here' 
          size='lg' 
          variant="outline"
          htmlSize={3}
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          className="input"/>
    
        </ChakraProvider>
      )
    }
    

export default Inputbox;

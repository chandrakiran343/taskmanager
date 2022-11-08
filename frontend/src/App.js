import React from 'react';
// import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import InputComponent from './InputComponent';

function App() {
      return (
        <ChakraProvider>
          <InputComponent />
        </ChakraProvider>
      )
    }
    

export default App;


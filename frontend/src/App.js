import React from 'react';
// import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import InputComponent from './InputComponent';
import ViewTask from './ViewTask';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
      return (
        <ChakraProvider>
          <Router>
            <Routes>
              <Route path='/' element={<InputComponent />} />
              <Route path='/edit/:id' element={<ViewTask />} />
            </Routes>
          </Router>
        </ChakraProvider>
      )
    }
    
export default App;


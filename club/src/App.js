import logo from './logo.svg';
import './App.css';
import AddEvent from './Component/AddEvent';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <AddEvent/>
      </div>
      </ChakraProvider>
  );
}

export default App;

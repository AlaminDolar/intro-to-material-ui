import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Newspaper from './components/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <h1>Hi Dollar I love you / How are you??</h1>
      <Button variant="outlined">Yes I am fine</Button>
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;

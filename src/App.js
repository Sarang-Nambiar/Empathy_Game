import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from './Components/Modal';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <Button variant="contained" onClick={() => setActive(true)}>Modal</Button>
      {active && <Modal closeModal={setActive}/>}
    </div>
  );
}

export default App;

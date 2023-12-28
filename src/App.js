
import './App.css';
import Navbar from './Components/Navbar';
import Board from './Components/Board';
import { useState } from 'react';

function App() {

  const [category, setCategory] = useState("general");

  return (
    <div className="body">
      <Navbar setCategory={setCategory} />
      <Board category={category} />
    </div>
  );
}

export default App;

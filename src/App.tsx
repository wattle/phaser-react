import React, { FC, useEffect, useState } from 'react';
import './App.css';
import World from './components/World';


const App:FC = () => {

  const [world, setWorld] = useState<World>();
  
  useEffect(() => {
    if(!world) {
      const world = new World();
      setWorld(world);
    }
   }, [world]);

  return (
    <div className="App">
      <div id='hero' />
    </div>
  );
}

export default App;

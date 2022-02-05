import React, { FC, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { InfoModal } from './components/ui/InfoModal';
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
    <RecoilRoot>
    <div className="App">
      <div id='hero' />
      <InfoModal />
    </div>
    </RecoilRoot>
  );
}

export default App;

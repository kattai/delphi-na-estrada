import React from 'react';
import Inicio from './components/Inicio';
import Agenda from './components/Agenda';
import Locais from './components/Locais';

const App = () => {
  return (
      <div className='App'>
        <Inicio/>
        <Agenda/>
        <Locais/>
      </div>
  );
};

export default App;
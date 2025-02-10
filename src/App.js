import React from 'react';
import Inicio from './components/Inicio';
import Agenda from './components/Agenda';
import Locais from './components/Locais';
import Participe from './components/Participe';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
      <div className='App'>
        <Inicio/>
        <Participe/>
        <Agenda/>
        <Locais/>
        <FAQ/>
        <Footer/>
      </div>
  );
};

export default App;
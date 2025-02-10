import React from 'react';
import Inicio from './components/Inicio';
import Agenda from './components/Agenda';
import Locais from './components/Locais';
import PqParticipar from './components/PqParticipar';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
      <div className='App'>
        <Inicio/>
        <PqParticipar/>
        <Agenda/>
        <Locais/>
        <FAQ/>
        <Footer/>
      </div>
  );
};

export default App;
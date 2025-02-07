import React from 'react';
import './styles/Inicio.css';
import 'animate.css';


const Home = () => {
  return (
    <section className='introduction'>
        <img className='animate__animated animate__fadeInUp logo' src="logo-gdk.svg" alt="gdk logo" />
        <div className="content">
        <h1 className='animate__animated animate__fadeInUp'>DELPHI NA ESTRADA</h1>
          <p className='animate__animated animate__fadeInUp'>
            Junte-se a nós no maior evento sobre o
            <span className='highlight-text'> Delphi do Brasil</span>
            .
          </p>
          <p className='animate__animated animate__fadeInUp'>Descubra como o <span className='highlight-text'> Delphi</span> pode transformar suas ideias em realidade!</p>
          <div className='animate__animated animate__bounceIn'>
            <button className='participe-btn'>FAÇA SUA INSCRIÇÃO!</button>
          </div>
          <p className='animate__animated animate__fadeInUp'>EVENTO <span className='highlight-text'>100% GRATUITO!</span></p>
        </div>
    </section>
  );
};

export default Home;
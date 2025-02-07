import React from 'react';
import '../App.css';
import './styles/Agenda.css';

const Agenda = () => {
  return (
    <section className='agenda'>
      <div className='container-agenda'>
        <div className='agenda-content'>
          <h2>
            <span className='small-title'>CONFIRA A AGENDA DO EVENTO!</span>
            <br/>
            Uma tarde com <span className='highlight-text'>muito conteúdo!</span>
          </h2>
          <ul className='agenda-list'>
            <li>
              <span className='highlight-text'>12:00PM </span> 
              to 
              <span className='highlight-text'> 01:00PM </span>
               – Credenciamento</li>
            <li>
              <span className='highlight-text'>01:00PM </span>
               to 
              <span className='highlight-text'> 01:30PM </span>
                – Abertura do evento
            </li>
            <li>
              <span className='highlight-text'>01:30PM </span>
              to 
              <span className='highlight-text'> 02:10PM </span>
               – TMS or FastReport or GDK
            </li>
            <li>
              <span className='highlight-text'>02:20PM </span>
                to 
              <span className='highlight-text'> 03:00PM</span>
               – TMS or FastReport or GDK
            </li>
            <li>
              <span className='highlight-text'>03:00PM </span>
              to 
              <span className='highlight-text'> 03:30PM </span>
               – Coffee break – Time to talk with customers prospects
            </li>
            <li>
              <span className='highlight-text'>03:40PM </span>
              to 
              <span className='highlight-text'> 04:20PM </span>
              – TMS or FastReport or GDK
            </li>
            <li>
              <span className='highlight-text'>04:30PM </span>
              to
              <span className='highlight-text'> 05:10PM </span>
              – MVPs who will help us with the location asked for an opportunity
            </li>
            <li>
              <span className='highlight-text'>05:10PM </span>
              to 
              <span className='highlight-text'> 05:30PM </span>
              – Reservado para atrasos
            </li>
            <li>
              <span className='highlight-text'>05:10PM </span>
                to
              <span className='highlight-text'> 06:00PM </span>
                – Encerramento
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
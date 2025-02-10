import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import './styles/Agenda.css';
import 'animate.css';

const Agenda = () => {
  return (
    <section className='agenda'>
      <div className='container-agenda'>
        <div className='agenda-content'>
          <h2>
            <span className='animate__animated animate__fadeInUp small-title'>CONFIRA A AGENDA DO EVENTO!</span>
            <br/>
            Uma tarde com <span className='animate__animated animate__fadeInUp highlight-text'>muito conteúdo!</span>
          </h2>
          <div className="agenda-item-container">
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 12:00PM - 01:00PM <FontAwesomeIcon icon={faArrowRight}/> Credenciamento</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 01:00PM - 01:30PM <FontAwesomeIcon icon={faArrowRight}/> Abertura do evento</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 01:30PM - 02:10PM <FontAwesomeIcon icon={faArrowRight}/> TMS - FastReport - GDK</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 02:20PM - 03:00PM <FontAwesomeIcon icon={faArrowRight}/> TMS - FastReport - GDK</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 03:00PM - 03:30PM <FontAwesomeIcon icon={faArrowRight}/> Coffee break</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 03:40PM - 04:20PM <FontAwesomeIcon icon={faArrowRight}/> TMS - FastReport - GDK</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 04:30PM - 05:10PM <FontAwesomeIcon icon={faArrowRight}/> Momento dos MVPs</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 05:10PM - 05:30PM <FontAwesomeIcon icon={faArrowRight}/> Reservado para atrasos</span></p>
            <p className='agenda-item'><span className='badge-gdk'> <FontAwesomeIcon icon={faClock}/> 05:10PM - 05:30PM <FontAwesomeIcon icon={faArrowRight}/> Encerramento</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
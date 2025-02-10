import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClipboard } from '@fortawesome/free-solid-svg-icons';
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
          <div className='agenda-table-container'>
          <table className='agenda-table'>
            <thead>
              <tr>
                <th><FontAwesomeIcon icon={faClock}/> Horário</th>
                <th><FontAwesomeIcon icon={faClipboard}/> Programação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12:00PM - 01:00PM</td>
                <td>Credenciamento</td>
              </tr>
              <tr>
                <td>01:00PM - 01:30PM</td>
                <td>Abertura do evento</td>
              </tr>
              <tr>
                <td>01:30PM - 02:10PM</td>
                <td>TMS - FastReport - GDK</td>
              </tr>
              <tr>
                <td>02:20PM - 03:00PM</td>
                <td>TMS - FastReport - GDK</td>
              </tr>
              <tr>
                <td>03:00PM - 03:30PM</td>
                <td>Coffee break</td>
              </tr>
              <tr>
                <td> 03:40PM - 04:20PM</td>
                <td>TMS - FastReport - GDK</td>
              </tr>
              <tr>
                <td> 04:30PM - 05:10PM</td>
                <td>Momento dos MVPs</td>
              </tr>
              <tr>
                <td> 05:10PM - 05:30PM</td>
                <td>Reservado para atrasos</td>
              </tr>
              <tr>
                <td> 05:10PM - 05:30PM</td>
                <td>Reservado para atrasos</td>
              </tr>
              <tr>
                <td> 05:10PM - 05:30PM</td>
                <td>Encerramento</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
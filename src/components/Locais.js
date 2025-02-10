import React from 'react';
import './styles/Locais.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faCalendarDays, faCheck } from '@fortawesome/free-solid-svg-icons';

const symplaRedirect = (e) => {
  e.preventDefault();
  window.location.href='http://google.com';
}

const Locais = () => {
  return (
    <section className='locais'>
      <div className="container-locais">
        <div className="locais-content">
          <h2 className='title-2'>
          <p className='small-title-2'>Vagas limitadas!</p>
           Locais e Datas
            <br/>
          </h2>
          <div className="locais-card-container">
            <div className="local-card-group">
              <div className="local-card">
                <h3>Porto Alegre – RS</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 12/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> Fecomércio
                </h3>
                <button onClick={ symplaRedirect} className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
              <div className="local-card">
                <h3>Chapecó – SC</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 14/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> Unoesc Chapecó
                </h3>
                <button className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
              <div className="local-card">
                <h3>Curitiba – PR</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 16/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> NÃO DEFINIDO
                </h3>
                <button className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
              <div className="local-card">
                <h3> Campinas – SP</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 19/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> Centro Paula Souza
                </h3>
                <button className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
            </div>
            <div className="local-card-group">
              <div className="local-card">
                <h3>Rio de Janeiro – RJ</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 20/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> UVA
                </h3>
                <button className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
              <div className="local-card">
                <h3>Teresópolis – RJ</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 21/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> AlterData
                </h3>
                <button className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
              <div className="local-card">
                <h3>Brasilia – DF</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 22/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> IFB Campus Brasília
                </h3>
                <button className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
              <div className="local-card">
                <h3>Fortaleza – CE</h3>
                <h3>
                  <FontAwesomeIcon icon={faCalendarDays}/> 23/05/25 
                  <br/>
                  <FontAwesomeIcon icon={faMapPin}/> NÃO DEFINIDO
                </h3>
                <button className='inscricao-local-btn'>Garanta sua Vaga <FontAwesomeIcon icon={faCheck}/></button>
              </div>
            </div>
            <h3 className='text'>Faça a sua inscrição pelo Sympla – Link conforme a sua cidade.</h3>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Locais;
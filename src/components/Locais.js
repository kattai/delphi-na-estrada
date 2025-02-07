import React from 'react';
import './styles/Locais.css';

const Locais = () => {
  return (
    <section className='locais'>
      <div className="container-locais">
        <div className="locais-content">
          <h2>
            <span >Locais</span> e <span>Datas</span>
            <br/>
            <p className='small-title-2'>Vagas limitadas! Faça a sua inscrição pelo Sympla – Link conforme a sua cidade.</p>
          </h2>
            <table className='locais-table'>
              <tr>
                <th>DATA</th>
                <th>CIDADE</th>
                <th>LOCAL</th>
                <th>INSCRIÇÃO</th>
              </tr>
              <tr>
                <td>12/05/2025</td>
                <td>Porto Alegre – RS</td>
                <td>Fecomércio</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
              <tr>
                <td>14/05/2025</td>
                <td>Chapecó – SC</td>
                <td>Sweden</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
              <tr>
                <td>16/05/2025</td>
                <td>Curitiba – PR</td>
                <td>Mexico</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
              <tr>
                <td>19/05/2025</td>
                <td>Campinas – SP</td>
                <td>Austria</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
              <tr>
                <td>20/05/2025</td>
                <td>Rio de Janeiro – RJ</td>
                <td>UK</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
              <tr>
                <td>21/05/2025</td>
                <td>Teresópolis – RJ</td>
                <td>Germany</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
              <tr>
                <td>22/05/2025</td>
                <td>Brasilia – DF</td>
                <td>Canada</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
              <tr>
                <td>23/05/2025</td>
                <td>Fortaleza – CE</td>
                <td>Italy</td>
                <td><button className='inscricao-btn'>Inscrever-se</button></td>
              </tr>
          </table>
          
        </div>
      </div>
    </section>
  );
};

export default Locais;
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([])

  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongID');

  useEffect( () => {
    console.log(ongId);
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      console.log(response);
      setIncidents(response.data);
    })     
  }, [ongId]);

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });
      setIncidents(incidents.filter(incidents => incidents.id !== id))
    } catch {
      alert('Erro ao deletar o caso, tente novamente.');
    }
  };

  async function handleLogout(){
    localStorage.removeItem('ongName');
    localStorage.removeItem('ongID');

    history.push('/');
  };

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
        <button 
          onClick={handleLogout}
          type="button"
        >
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#A8A8B3"/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
/*

        <li key={incident.id}>
          <strong>CASO:</strong>
          <p>incident.title</p>

          <strong>DESCRIÇÃO:</strong>
          <p>incident.description</p>

          <strong>VALOR:</strong>
          <p>Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL' ).format(incident.value)}</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>
*/

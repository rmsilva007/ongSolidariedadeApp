import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu canal de cadastro para coletar doações.</h1>
          <p>Ajudamos pessoas a encontrarem organizações para receber doações.</p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>
              Cadastre sua organização   
            </strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;
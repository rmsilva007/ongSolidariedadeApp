import React from 'react';//todos os arquivos onde o react for utilizado é necessaário importa-lo.
import ReactDOM from 'react-dom';//integrando o React na DOM
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//renderizando o app  
);


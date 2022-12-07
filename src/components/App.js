import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './main/Main'

import logo from '../images/Logo.svg';

import '../index.css';

function App() {
  return (
    <div className="root">
      <div className="App">
        <div className="wrapper">

          <header className="header">
            <img className="header__logo" src={logo} alt="Логотип"/>
          </header>

          <Main/>

          <footer className="footer">
              <p className="footer__copyright">Anna Skorobagatova</p>
          </footer>

        </div>
      </div>
    </div>
  );
}

export default App;

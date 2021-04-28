import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import PokemonProvider from './context/PokemonProvider'

ReactDOM.render(
  <PokemonProvider>
    <App />
  </PokemonProvider>,
  document.getElementById('root')
);

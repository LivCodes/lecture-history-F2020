import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
import PainterProvider from './context/PainterProvider'

ReactDOM.render(
  <PainterProvider>
    <Router>
      <App />
    </Router>
  </PainterProvider>,
  document.getElementById('root')
);

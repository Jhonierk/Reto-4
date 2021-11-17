import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Redes from './components/redes.jsx';
import Footer from './components/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Redes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);



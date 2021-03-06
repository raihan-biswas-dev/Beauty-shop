import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';

ReactDOM.render(<HelmetProvider><App /></HelmetProvider>, document.getElementById('root'));
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login from './components/Login.jsx'; 
import '../public/style.css';


render(<Login />, document.querySelector('#root'));

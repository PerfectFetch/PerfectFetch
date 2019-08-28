import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Profile from './components/Profile.jsx'; 
import '../public/style.css';


render(<Profile />, document.querySelector('#root'));

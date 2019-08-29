import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import all components
import App from './App.jsx';
import Login from './components/Login.jsx'; 
import Signup from './components/Signup.jsx'; 
import Profile from './components/Profile.jsx'; 

import '../public/style.css';

// Routing
const routing = (
    <Router>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
    <Route path="/homepage" component={App} />
    </Router>
); 

render(<Profile />, document.querySelector('#root'));

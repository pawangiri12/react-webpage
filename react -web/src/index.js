import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Maincontext from './Context/Maincontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Maincontext>
    <App />   </Maincontext>
);

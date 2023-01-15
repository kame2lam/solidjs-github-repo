/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, hashIntegration } from 'solid-app-router';
import App from './App';
import './bootstrap.min.css'

render(
  () =>(
  <Router  source={hashIntegration()}>
    <App />  
  </Router>
  ),
  document.getElementById('root')
);

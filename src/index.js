import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Link } from 'react-router-dom'





ReactDOM.render(
  <React.StrictMode>
  <HashRouter basename={process.env.PUBLIC_URL}>
  <Nav.Item><Nav.Link href="./react-site/"> Home </Nav.Link> </Nav.Item>
<Nav.Item><Nav.Link href="react-site/street"> Street </Nav.Link> </Nav.Item>
<Nav.Item><Nav.Link href="react-site/travel"> Travel </Nav.Link> </Nav.Item>
<Nav.Item><Nav.Link href="react-site/weddings"> Weddings </Nav.Link> </Nav.Item>
    <App />
</HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

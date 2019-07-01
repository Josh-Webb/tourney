import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationView from './components/ApplicationView';
import NavBar from './components/nav/navBar'

ReactDOM.render(
<Router>
    <div className="router">
    <Header />
    <ApplicationView />
    {/* <Footer /> */}
    </div>
</Router>, document.getElementById('root'));

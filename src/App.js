import React from 'react';
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import './assets/css/index.css'
import SiteNavBar from './components/global/SiteNavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/global/NotFound';
import AddBranchForm from './components/Forms/AddBranchForm';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Footer from "./components/global/Footer/index";
import Board from './components/Board/Board';
import Preload from './components/global/Preload';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


function App() {

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="app">
        <Router>
          <Preload />
          <SiteNavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/add-branch" component={AddBranchForm} />
            <Route exact path="/branch/:id" component={Board} />
            <Route component={NotFound} /> {/* If nothing gets found, select the last page which is the not found page. */}
          </Switch>
          <Footer />
        </Router>
      </div>
    </AlertProvider>
  );
}

export default App;

// 1. make the style of the board 
// 2. add item
// 3. make control the board
// 4. style the item 
// 5. control the item
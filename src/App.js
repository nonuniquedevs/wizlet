import logo from './logo.svg';
import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation'
import Error from './components/Error'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

//Navigation is the nav bar
//Routes is the switch mechanism

function App() {
  return (
      <Router>
      <div className="App">
          <Navigation />
            <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="*" element={<Error/>}/>
           </Routes>
        </div> 
      </Router>

  );
}

export default App;

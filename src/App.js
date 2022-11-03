import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Effect from './learn-useEffect/index';
import Counter from './learn-useState/counter';

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className='NavBar'>
          <ul className='ul'>
            <li className='li'>
              <Link to="/">Use State</Link>
            </li>
            <li className='li'>
              <Link to='/effect'>Use Effect</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path='/' exact element = {<Counter/>}/>
        <Route path='/effect' exact element = {<Effect/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
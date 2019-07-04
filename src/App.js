import React from 'react';
import './App.css';
import Intro from './components/Intro/intro.js'
import Timejour from './components/timejour/Timejour.js'
import Works from './components/Works/works.js'
function App() {
  return (
    <div>
    <Intro/>
    <Works/>
    <Timejour/>
    </div>
  );
}

export default App;

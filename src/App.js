import React from 'react';
import './App.css';
import Intro from './components/Intro/intro.js';
import Timejour from './components/timejour/Timejour.js';
import Works from './components/Works/works.js';
import Footer from './components/Footer/footer.js';
import Aboutme from './components/Aboutme/aboutme.js';
function App() {
  return (
    <div>
    <Intro/>
    <Aboutme/>
    <div className="time">
      <Works/>
      <Timejour/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;

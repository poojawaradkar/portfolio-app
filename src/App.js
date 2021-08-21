import React from 'react';

import Introduction from './Components/Introduction/Introduction';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Art from './Components/Art/Art';

import RandomQuotes from "./Containers/RandomQuotes/RandomQuotes";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Introduction />
      <RandomQuotes />
      <About />
      <Skills />
      <Education />
      {/* <Art/> */}
    </div>
  );
}

export default App;

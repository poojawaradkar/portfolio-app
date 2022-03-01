import React from 'react';

import Introduction from 'Components/Introduction/Introduction';
import About from 'Components/About/About';
import Footer from 'Components/Footer/Footer';

import RandomQuotes from 'Containers/RandomQuotes/RandomQuotes';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Introduction />
      <RandomQuotes />
      <About />
      <Footer />
    </div>
  );
}

export default App;

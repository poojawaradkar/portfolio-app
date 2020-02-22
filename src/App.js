import React from 'react';
import './App.scss';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Art from './Components/Art';

function App() {
    return (
        <div className="App">
            <Introduction/>
            <About/>
            <Skills/>
            <Education/>
            <Art/>
        </div>
    );
}

export default App;

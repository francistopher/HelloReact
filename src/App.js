import React, {useState} from 'react';
import logo from './res/chimp.png';
import './App.css';

import {lightTheme, darkTheme} from './view/Themes';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const themeToggler = () => {
     (theme === lightTheme) ? setTheme(darkTheme) : setTheme(lightTheme)
  }

  return (
    <div className="App" id="App">
      <header className="App-header" style={theme}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chimp Memory Game!
        </p>
        <button className="Theme-button" onClick={themeToggler}></button>
      </header>
    </div>
  );
}

export default App;

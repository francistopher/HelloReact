import React, { useState } from "react";
import "./assets/styles/App.css";
import { lightTheme, darkTheme } from "./assets/styles/Themes";
import ThemeButton from "./components/Buttons/ThemeButton";
import IntroLabel from "./components/Labels/IntroLabel";

const App = () => {
    const [theme, setTheme] = useState(lightTheme);
    const themeToggler = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };

    return (
        <div className="App" id="App">
            <header className="App-header" style={theme}>
                <IntroLabel></IntroLabel>
                <ThemeButton onClick={themeToggler}></ThemeButton>
            </header>
        </div>
    );
};

export default App;

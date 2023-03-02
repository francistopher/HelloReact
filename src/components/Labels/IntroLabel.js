import "../../assets/styles/App.css";
import logo from '../../assets/images/chimp.png';
import React from "react";
const IntroLabel = () => {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Chimp Memory Game!</p>
        </>
    );
};

export default IntroLabel;

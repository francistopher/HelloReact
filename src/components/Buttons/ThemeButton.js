import '../../assets/styles/App.css';
import React from 'react';
const ThemeButton = ({onClick}) => {
    return (
    <button className="Theme-button" onClick={onClick}></button>
    );
}

export default ThemeButton;
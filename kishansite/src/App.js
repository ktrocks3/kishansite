import React from 'react';
import './App.css';
import TopBar from './components/topbar.js';
import TitleArea from './components/titlearea.js';
import AboutMe from './components/aboutme.js';
import CheckIcon from '@mui/icons-material/Check';


function App() {
    return (
        <div className="App">
            <div className="row">
                <TopBar/>
            </div>
            <div className="row">
                <TitleArea/>
            </div>
            <div className="row">
                <img className="mePicture"
                     src="/Kishan.jpg"
                     alt="Kishan Thakurani"/>
            </div>
            <div className="row">
                <AboutMe/>
            </div>
            <div className="row">
                <p></p>
            </div>
        </div>
    );
}

export default App;

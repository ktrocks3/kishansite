import React from 'react';
import './App.css';
import TopBar from './components/topbar.js';
import TitleArea from './components/titlearea.js';

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
            {/* Add other components here */}
        </div>
    );
}

export default App;

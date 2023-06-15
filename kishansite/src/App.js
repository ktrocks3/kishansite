import React from 'react';
import './App.css';
import TopBar from './components/topbar.js';
import TitleArea from './components/titlearea.js';

function App() {
    return (
        <div className="App">
            <div className="row">
                <TopBar />
            </div>
            <div className="row">
                <TitleArea />
            </div>
            {/* Add other components here */}
        </div>
    );
}

export default App;

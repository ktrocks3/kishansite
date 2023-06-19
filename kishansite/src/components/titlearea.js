import "./titlearea.css";
import React from 'react';

function TitleArea() {
    return (
        <div className="titleArea-box">
            <div className="titleArea-left">
                <p className="titleArea-header">Kishan Thakurani</p>
                <p className="titleArea-subheader">Student Developer</p>
            </div>
            <div className="titleArea-right">
                <p className="titleArea-text">I am a student developer who is passionate about learning new things and building projects.</p>
                <a href="/Kishan%20Thakurani.pdf" download>
                    <button className="titleArea-button">Download Resume (PDF)</button>
                </a>
            </div>
        </div>
    );
}

export default TitleArea;

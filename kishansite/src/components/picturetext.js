import React from 'react';
import './picturetext.css';

function PictureText() {
    return (
        <div className={"pictureWrapper"}>

            <img className="mePicture"
                 src="/Kishan.jpg"
                 alt="Kishan Thakurani"
            />
            <div className="mePicture-text">
                <p className="mePicture-text">Journey with me into the vast expanse of technology. I'm Kishan Naresh
                    Thakurani, a programmer driven by the diverse cultural tapestry that has shaped my path. With
                    roots in both Curacao and India, my diverse cultural background has shaped my perspective and
                    fueled my drive to make a difference.</p>
            </div>
        </div>
    );

}

export default PictureText;
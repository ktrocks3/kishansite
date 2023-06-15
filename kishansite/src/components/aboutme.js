import aboutme from "./aboutme.css";

function AboutMe() {

    return (
        <div style={{width: "100%"}}>
            <div className="aboutMe-title-box">
                <p className="aboutMe-title">about me</p>
            </div>
            <div className="aboutMe-box">
                <div className="aboutMe-left">
                    <p>This is the content of the blue box.</p>
                    <p>This is the content of the blue box.</p>
                </div>
                <p className="aboutMe-text">Journey with me into the vast expanse of technology. I'm Kishan Naresh
                    Thakurani, a programmer driven by the diverse cultural tapestry that has shaped my path. With roots
                    in both Curacao and India, my diverse cultural background has shaped my perspective and fueled my
                    drive to make a difference.</p>
            </div>

        </div>
    );
}

export default AboutMe;
import titlearea from "./titlearea.css";

function TitleArea() {
    return (
        <div className={"titleArea-box"}>
            <div className={"titleArea-left"}>
                <p className={"titleArea-header"}>Kishan Thakurani</p>
                <p className={"titleArea-subheader"}> Student Developer </p>
            </div>
            <div className={"titleArea-right"}>
                <p className={"titleArea-text"}> I am a student developer who is passionate about learning new things
                    and building projects. </p>
                <button className={"titleArea-button"}>Resume</button>
            </div>
        </div>);
}

export default TitleArea;
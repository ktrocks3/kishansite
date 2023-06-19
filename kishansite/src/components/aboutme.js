import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faEarthAmericas} from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
import './aboutme.css'

function AboutMe() {

    return (
        <div style={{width: "100%"}}>
            <div className="aboutMe-title-box">
                <p className="aboutMe-title">about me</p>
            </div>
            <div className="aboutMe-box">
                <div className={"aboutMe-row"}>
                    <p className="aboutMe-text">Journey with me into the vast expanse of technology. I'm Kishan Naresh
                        Thakurani, a programmer driven by the diverse cultural tapestry that has shaped my path. With
                        roots in both Curacao and India, my diverse cultural background has shaped my perspective and
                        fueled my drive to make a difference.</p>
                </div>
                <div className={"aboutMe-row"}>
                    <FontAwesomeIcon icon={faBook} className={"aboutMe-row-icon"}/>
                    <p className="aboutMe-text"> Immersed in a world beyond textbooks, I ventured into a realm of
                        dynamic pursuits that sculpted my abilities and broadened my perspectives. From the thrilling
                        battlegrounds of spirited debates that honed my critical thinking, to the global stage of Model
                        United Nations conferences that fueled my passion for diplomacy, I embraced diverse
                        extracurricular activities that shaped me into a formidable communicator. Guiding the literature
                        club, I nurtured a vibrant creative community, igniting my love for storytelling. Collaborating
                        with like-minded individuals in the Future Leaders of the Globe Club, I fearlessly tackled
                        global challenges, refining my leadership skills along the way.</p>
                </div>
                <div className={"aboutMe-row"} style={{flexDirection: "row-reverse"}}>
                    <FontAwesomeIcon icon={faEarthAmericas}
                                     style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#000000",}}
                                     className={"aboutMe-row-icon"}/>
                    <p className="aboutMe-text">Beyond the realm of programming, I actively channel my energy into
                        making a tangible difference through initiatives that have a global reach and benefit local
                        communities. In partnership with the Global Issues Network (GIN), I unite with fellow students
                        as a force for positive change, advocating for sustainable environmental impact and empowering
                        communities to combat climate change. Furthermore, my commitment to making a difference extends
                        to supporting various fundraising events for charities, utilizing my skills and resources to
                        contribute meaningfully. By obtaining a scuba diving certification, I actively participate in
                        coral reef cleaning efforts, demonstrating my dedication to preserving our precious natural
                        ecosystems. Being recognized with a Presidential Recognition Award for community service fuels
                        my motivation to harness technology as a catalyst for lasting and transformative change.</p>
                </div>
            </div>

        </div>
    )
        ;
}

export default AboutMe;
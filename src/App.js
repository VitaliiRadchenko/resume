import React from "react";
import "./App.css";
import { work, contacts, education, techSkills, softSkills } from "./data";
import WorkList from "./work-list/workList";
import ContactBox from "./contact-box/contact-box";
import EducationBlock from "./education/education-block";
import TechSkills from "./tech-skills/tech-skills";
import SoftSkills from "./soft-skills/soft-skills";

export default function App() {
    return (
        <div className='App'>
            <div className='frst-rw'>
                <div className='box-photo'></div>
                <div className='box-contacts'>
                    <h3>Contacts</h3>
                    <ul>
                        {contacts.map((props, index) => {
                            return <ContactBox key={index} props={props} />;
                        })}
                    </ul>
                </div>
                <div className='box-tech-skills'>
                    <h3>Tech Skills</h3>
                    <ul>
                        {techSkills.map((props, index) => {
                            return <TechSkills key={index} props={props} />;
                        })}
                    </ul>
                </div>
                <div className='box-soft-skills'>
                    <h3>Soft Skills</h3>
                    <ul>
                        {softSkills.map((props, index) => {
                            return <SoftSkills key={index} props={props} />;
                        })}
                    </ul>
                </div>
            </div>
            <div className='scnd-rw'>
                <div className='author'>
                    <h2>Front-End Developer</h2>
                    <h1>RADCHENKO VITALII</h1>
                    <p>
                        Communicative, I easily find a common language with the
                        team and have experience in communicating with citizens.
                        I treat work responsibly. There is a desire to develop,
                        constantly review training materials and gain practical
                        experience in using new tools for developing Web
                        applications.
                    </p>
                </div>
                <div className='projects'>
                    <h2>My projects</h2>
                    <h3>
                        Resume on Gitlab
                        <a href='https://gitlab.com/radchenko-vik/resume'>
                            [...resume]
                        </a>
                    </h3>
                    <h4>(React.js, HTML, CSS)</h4>
                    <p />
                </div>
                <div className='experience'>
                    <h2>Work Experience</h2>
                    {work.map((props, index) => {
                        return <WorkList key={index} props={props} />;
                    })}
                </div>
                <div className='education'>
                    <h2>Education</h2>
                    {education.map((props, index) => {
                        return <EducationBlock key={index} props={props} />;
                    })}
                </div>
            </div>
        </div>
    );
}

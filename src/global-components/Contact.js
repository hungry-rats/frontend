import React from 'react';
import './Contact.css';
import GH from './img/GitHub_Logo.png';
import LNKD from './img/Linkedin_Logo.svg';


const Contact = () => {
    return (
        <div className="contactContainer">
            <h2>Seefood was proudly cooked up for you by us four. <br></br> We may not be chefs, but we know how to grill up some code!  <br></br>Feel free to reach out to us with any inquries or feedback.</h2>
            <br></br>
            <div className="individuals">
                <div className="rowHeaders">
                    <h2>Learn More:</h2>
                    <img className="gitHub" src={GH}></img>
                    <img className="linkedin" src={LNKD}></img>

                </div>
                <div className="projectDetails">
                    <h3>About this Project</h3>
                    <a href="https://github.com/hungry-rats">Project Repo</a>

                </div>
                <div className="dylan">
                    <h3>Dylan</h3>
                    
                    <h3></h3>
                </div>
                <div className="Michael">
                    <h3>Michael</h3>
                </div>
                <div className="Josmar">
                    <h3>Josmar</h3>
                </div>
                <div className="Marcus">
                    <h3>Marcus</h3>
                </div>

            </div>


        </div>
    );
};

export default Contact;
import React from 'react';
import './Contact.css';
import GH from './img/GitHub_Logo.png';
import LNKD from './img/Linkedin_Logo.svg';
import NavBar from '../global-components/NavBar';
import chickenLunch from './img/chickenLunch.jpg'




const Contact = () => {
    return (
        <div className="contactContainer">
            <NavBar />
            <h2>Seefood was proudly cooked up for you by us four. 
                <br></br> We may not be chefs, but we know how to grill up some code!  
                <br></br>Feel free to reach out to us with any inquries or feedback.</h2>
            <br></br>
            <div className="individuals">
                <div className="rowHeaders">
                    <h2>Learn More:</h2>
                    <img className="gitHub" src={GH}></img>
                    <img className="linkedin" src={LNKD}></img>

                </div>
                <div className="projectDetails grow">
                    <h3>About this Project</h3>
                    <a href="https://github.com/hungry-rats">Project Repo</a>

                </div>
                <div className="dylan grow">
                    <h3>Dylan</h3>
                    <a href="https://github.com/DylanDrechsel">My GH Account</a>

                    
                    <h3></h3>
                </div>
                <div className="Michael grow">
                    <h3>Michael</h3>
                    <a href="https://github.com/michaelremsha">My GH Account</a>
                </div>
                <div className="Josmar grow">
                    <h3>Josmar</h3>
                    <a href="https://github.com/GrandZizi">My GH Account</a>

                </div>
                <div className="Marcus grow">
                    <h3>Marcus</h3>
                    <a href="https://github.com/mgtz505">My GH Account</a>
                    <br></br>
                    <br></br>
                    <a href="https://www.linkedin.com/in/gutierrezmarcus/">Connect on LinkedIn</a>

                </div>

            </div>
            <img className="footerPhoto" src={chickenLunch}/>
            <br></br>
            Photo by <a href="https://unsplash.com/@cant89?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Davide Cantelli</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  


        </div>
    );
};

export default Contact;
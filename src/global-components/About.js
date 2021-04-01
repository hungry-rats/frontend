import React from 'react';
import { Route, Link } from 'react-router-dom';
import "./About.css";
import NavBar from '../global-components/NavBar';



const About = () => {
    return (
        <div className="aboutContainer">
            <NavBar />
            <h1>Welcome to Seefood!</h1>
            <br></br>
            {/* <h2>We designed Seefood to be the tastiest app for discovering new and exciting recipes from all of your friends!</h2> */}
            <div className="qAndAGrid">
                <div className="questions">
                    <h3 className="q1">Who should use Seefood?</h3>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h3 className="q2">What can Seefood users cook up?</h3>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h3 className="q3">How do I add a recipe to Seefood?</h3>
                </div>
                <div className="answers">
                    <h3 className="a1">Seefood is the go-to internet hangout for both professional and aspiring chefs!</h3>
                    <br></br>
                    
                    <h3 className="a2">Spread the love! When you aren't trying out a new recipe, submit your favorites to share with others.</h3>
                    <br></br>
                    <h3 className="a3">YOLO 420</h3>

                </div>
                <div>
                    <img className = "aboutImage" src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="ingredients"/>
                </div>
            </div>


        </div>
    );
};

export default About;
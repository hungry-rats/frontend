import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel, Form, Jumbotron } from "react-bootstrap";
import "./LandingCarousel.css";

export default function LandingCarousel() {

	//Establish State Here
	// const [formData, setFormData] = useState({
	// 	email: '',
	// 	username: null,
	// 	password: '',
	// 	passwordConfirm:'',
	// 	valid:''
	// })

	const [emailState, setEmailState] = useState()
	const [usernameState, setUsernameState] = useState()
	const [passwordState, setPasswordState] = useState()
	const [passwordConfirmState, setPasswordConfirmState] = useState()




	const [inputValue, setInputValue] = useState({

	})
	let passwordConfirm ='';
	let password ='';
	let username ='';
	let email ='';

	//Declare Password Comparison Function Here
	function comparePasswords(){
		console.log(passwordConfirm.value)
      	console.log(password.value)
		if(passwordConfirmState.passwordConfirm === passwordState.password){
			alert("Passwords Match")} else alert("Passwords Do Not Match!")
	}
	//Handle Change Here
	function handleChange(event){
		
		setInputValue({
			inputValue: event.target.value
		})

	}
	function handleUserName(event){
		setUsernameState({
			username: event.target.value
		})
		}
	

	function handleEmail(event){
		setEmailState({
			email: event.target.value
		})
	}

	function handlePassword(event){
		setPasswordState({
			password: event.target.value
		})
	}

	function handlePasswordConfirm(event){
		setPasswordConfirmState({
			passwordConfirm: event.target.value
		})
	}
	




	console.log(username)
	
	//Handle Submit Here
	function handleSubmit(event){
		event.preventDefault();
		console.log(event.target);
	}

	// function onSubmit(event){

	// }

  return (

	<div className="container">
		<Button variant="info" className="logoIcon">PLACEHOLDER FOR ICON</Button>
		<Button variant="info" className="userButton">
			<span>USER</span>
		</Button>
		<div className="spacer"></div>
		<div className="welcomeBar">
			<h1>Welcome to Tasty</h1>
		</div>
		<div className="carouselGrid">
			<div className="carouselOne">
				<Carousel fade>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="First slide"
					/>
					<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Second slide"
					/>

					<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Third slide"
					/>

					<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
					</Carousel.Caption>
				</Carousel.Item>
				</Carousel>
			</div>
			{/* <div>SPACER</div> */}
			<div className="carouselTwo">
				<Carousel fade>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="First slide"
					/>
					<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Second slide"
					/>

					<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Third slide"
					/>

					<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
					</Carousel.Caption>
				</Carousel.Item>
				</Carousel>
			</div>
			{/* <div>SPACER</div> */}
			<div className="carouselThree">
				<Carousel fade>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="First slide"
					/>
					<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Second slide"
					/>

					<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Third slide"
					/>

					<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
					</Carousel.Caption>
				</Carousel.Item>
				</Carousel>
			</div>
			{/* <div>SPACER</div> */}
			<div className="carouselFour">
				<Carousel fade>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="First slide"
					/>
					<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Second slide"
					/>

					<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://picsum.photos/200/300"
					alt="Third slide"
					/>

					<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
					</Carousel.Caption>
				</Carousel.Item>
				</Carousel>
			</div>

		<div className = "linkToFeed">
		<Jumbotron>
			<h1>Welcome To Tasty</h1>
			<p>
				This is a simple hero unit, a simple jumbotron-style component for calling
				extra attention to featured content or information.
			</p>
			<p>
				<Button variant="info">Visit my Feed</Button>
			</p>
		</Jumbotron>

		<div className = "signUpForm">
			<Form>
				<Form.Group controlId="email" required onChange={handleEmail} value={setInputValue} onSubmit={handleSubmit}>
					<h2> Sign Up!</h2>
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email"  />
				</Form.Group>

				<Form.Group controlId="username" required onChange={handleUserName} value={setInputValue} onSubmit={handleSubmit}>
					<Form.Label>Username</Form.Label>
					<Form.Control type="password" placeholder="Username"  />
				</Form.Group>

				<Form.Group controlId="password" required onChange={handlePassword} value={setInputValue} onSubmit={handleSubmit}  >
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group controlId="passwordConfirm" required onChange={handlePasswordConfirm} value={setInputValue} onSubmit={handleSubmit} >
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" placeholder="Confirm Password" r/>
				</Form.Group>
			</Form>
			<Button 
				variant="info"
				type="submit"
				onClick={comparePasswords}>Submit</Button>
		</div>
		
		</div>
	

		</div>
	</div>
  );
}


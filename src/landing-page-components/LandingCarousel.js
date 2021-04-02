import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel, Form, Jumbotron } from "react-bootstrap";
import { useHistory, Link } from 'react-router-dom';
import "./LandingCarousel.css";
import axios from "axios";
import { atom, useRecoilState } from "recoil"

export const tokenState= atom({
	key: 'tokenState',
	default: null,
});

export default function LandingCarousel() {

	//Establish State Here
	const history = useHistory()
	const [token, setToken] = useRecoilState(tokenState)
	const [formData, setFormData] = useState({
		username: null,
		email: null,
		password: null
	})

	// console.log(token)

	// console.log(useRecoilState(userState))

	// const [emailState, setEmailState] = useState()
	// const [usernameState, setUsernameState] = useState()
	// const [passwordState, setPasswordState] = useState()
	const [passwordConfirmState, setPasswordConfirmState] = useState()

	const [inputValue, setInputValue] = useState({})

	//Declare Password Comparison Function Here
	function comparePasswords(){

		if(passwordConfirmState.passwordConfirm === formData.password){
			axios.post(`http://localhost:8000/users/create`, formData)
			.then(() => {
				history.push('/')
				console.log(history)
			})
			.catch(console.error)}
			 else alert("Yikes! Your Passwords Do Not Match!")

		
	}

	//Handle Change Here
	function handleChange(event){
		setInputValue({
			inputValue: event.target.value
		})

	}
	function handleUserName(event){
		setFormData({
			email: formData.email,
			username: event.target.value,
			password: formData.password
		})
		}
	

	function handleEmail(event){
		setFormData({
			email: event.target.value,
			username: formData.username,
			password: formData.password
		});
	}

	function handlePassword(event){
		setFormData({
			email: formData.email,
			username: formData.username,
			password: event.target.value,
		});
	}

	function handlePasswordConfirm(event){
		setPasswordConfirmState({
			passwordConfirm: event.target.value
		})
	}
	

	
	//Handle Submit Here
	function handleSubmit(event){
		event.preventDefault();
		console.log(event.target);
	}

	// function onSubmit(event){

	// }

  return (
		<div className='container'>
			<Button variant='info' className='logoIcon'>
				PLACEHOLDER FOR ICON
			</Button>
			<Button variant='info' className='userButton' as={Link} to='/login'>
				<span>USER</span>
			</Button>
			<div className='spacer'></div>
			<div className='welcomeBar'>
				<h1>Seefood</h1>
			</div>
			<div className='carouselGrid'>
				<div className='carouselOne'>
					<Carousel fade>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Second slide'
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				{/* <div>SPACER</div> */}
				<div className='carouselTwo'>
					<Carousel fade>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Second slide'
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				{/* <div>SPACER</div> */}
				<div className='carouselThree'>
					<Carousel fade>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Second slide'
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				{/* <div>SPACER</div> */}
				<div className='carouselFour'>
					<Carousel fade>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Second slide'
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src='https://picsum.photos/200/300'
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>

				<div className='linkToFeed'>
					<Jumbotron>
						<h1>Welcome To Seefood</h1>
						<p>
						We designed Seefood to be the tastiest app for discovering new and exciting recipes from all of your friends!
						 Add your favorites and spread the love!
						</p>
						<p>
							<Button variant='info'>Visit my Feed</Button>
						</p>
					</Jumbotron>

					<div className='signUpForm'>
						<Form>
							<Form.Group
								controlId='email'
								required
								onChange={handleEmail}
								value={setInputValue}
								onSubmit={handleSubmit}>
								<h2> Sign Up!</h2>
								<Form.Label>Email address</Form.Label>
								<Form.Control type='email' placeholder='Enter email' />
							</Form.Group>

							<Form.Group
								controlId='username'
								required
								onChange={handleUserName}
								value={setInputValue}
								onSubmit={handleSubmit}>
								<Form.Label className="userNameLabel">Username</Form.Label>
								<Form.Control type='password' placeholder='Username' />
							</Form.Group>

							<Form.Group
								controlId='password'
								required
								onChange={handlePassword}
								value={setInputValue}
								onSubmit={handleSubmit}>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<Form.Group
								controlId='passwordConfirm'
								required
								onChange={handlePasswordConfirm}
								value={setInputValue}
								onSubmit={handleSubmit}>
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									type='password'
									placeholder='Confirm Password'
									r
								/>
							</Form.Group>
						</Form>
						<Button variant='info' type='submit' onClick={comparePasswords}>
							Submit
						</Button>
					</div>
				</div>
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
					<h2> Sign Up!</h2>
			<Form>
				<Form.Group controlId="email" className="emailFormField" required onChange={handleEmail} value={setInputValue} onSubmit={handleSubmit}>
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email"  />
				</Form.Group>

				<Form.Group controlId="username" className="usernameFormField" required onChange={handleUserName} value={setInputValue} onSubmit={handleSubmit}>
					<Form.Label>Username</Form.Label>
					<Form.Control type="password" placeholder="Username"  />
				</Form.Group>
					<Form.Group controlId="password" className="passwordEntryFormField" required onChange={handlePassword} value={setInputValue} onSubmit={handleSubmit}  >
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				<Form.Group controlId="passwordConfirm" className="passwordConfirmFormField" required onChange={handlePasswordConfirm} value={setInputValue} onSubmit={handleSubmit} >
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" placeholder="Confirm Password" r/>
				</Form.Group>
				

			</Form>
			<Button 
				variant="info"
				type="submit"
				className="submitFormButton"
				onClick={comparePasswords}>Submit</Button>
		</div>
		
		</div>
	


		</div>
	);
}

// export default userState;
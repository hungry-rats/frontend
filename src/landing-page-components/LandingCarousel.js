import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel, Form, Jumbotron } from "react-bootstrap";
import "./LandingCarousel.css";

export default function LandingCarousel() {
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
		</div>
	
		<div className = "signUpForm">
			<Form>
				<Form.Group controlId="formGroupEmail">
					<h2> Sign Up!</h2>
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
			</Form>
		</div>

		</div>
	</div>
  );
}

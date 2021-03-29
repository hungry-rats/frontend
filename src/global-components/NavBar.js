import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Navbar
			className='Nav'
			style={{ maxHeight: '3vh' }}
			collapseOnSelect
			variant='light'
			expand='md'>
			<Navbar.Brand style={{ color: 'black' }} as={Link} to='/home'>
				<b>Home</b>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link style={{ color: 'black' }} as={Link} to='/about'>
						<b>About</b>
					</Nav.Link>
					<Nav.Link style={{ color: 'black' }} as={Link} to='/contact'>
						<b>Contact</b>
					</Nav.Link>
				</Nav>

				<Nav className='ml-auto'>
					<Nav.Link
						className='github'
						style={{ color: 'black' }}
						href='https://github.com/DylanDrechsel'>
						<b>GitHub</b>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Navbar
			className='Nav'
			style={{ maxHeight: '6vh' }}
			collapseOnSelect
			variant='light'
			expand='md'>
			<Navbar.Brand
				className='grow'
				style={{ color: 'black' }}
				as={Link}
				to='/home'>
				<b className='homeLink'>Home</b>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link
						className='grow'
						style={{ color: 'black' }}
						as={Link}
						to='/about'>
						<b className='aboutLink'>About</b>
					</Nav.Link>
					<Nav.Link
						className='grow'
						style={{ color: 'black' }}
						as={Link}
						to='/contact'>
						<b className='contactLink'>Contact</b>
					</Nav.Link>
				</Nav>

				<Nav className='ml-auto'>
					<Nav.Link
						className='grow'
						style={{ color: 'black' }}
						as={Link}
						to='/user'>
						<b className='aboutLink'>User</b>
					</Nav.Link>
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

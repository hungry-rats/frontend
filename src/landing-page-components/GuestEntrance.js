import React from 'react';
import LandingCarousel from './LandingCarousel';
import SignUpForm from './SignUpForm';
import Footer from '../global-components/Footer';

export default function GuestEntrance() {
	return (
		<div>
			<LandingCarousel />
			<SignUpForm />
			<Footer />
		</div>
	);
}

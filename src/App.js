import react from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import LandingNavBar from './landing-page-components/LandingNavBar'

function App() {
	return (
		<div className='App'>
			
        <Route 
            path='/'
            exact render={() => (
              <LandingNavBar />
            )}
          />
		</div>
	);
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

class NoMatch extends React.Component {
    render() {
        return (
            <div className="cent">
                <Header />
                <h1>Error ! Page Not Found</h1>
                <br />
                <Link to='/' className="btn btn-primary">
							Back to Home
				</Link>
                <Footer />
            </div>
        );
    }
}

export default NoMatch;
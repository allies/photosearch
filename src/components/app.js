import React from 'react';
import Searchbox from './searchbox';
import Header from './header';
import Footer from './footer';

class App extends React.Component {
	
	render () {
	
		return (
            <div className="main">
                <Header />
				<Searchbox />
				<Footer />
            </div>
		)
	}
}

export default App;

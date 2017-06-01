import React from 'react';
import Header from './header';
import Footer from './footer';
import Searchbox from './searchbox';


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

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import App from '../components/app';
import Header from '../components/header';
import Footer from '../components/footer';
import Single from '../components/single';
import NoMatch from '../components/noMatch';


class Routes extends React.Component {
    
    render() {
        return(
            <Router>
                 <div className="main">
                    <Header />
                    <Switch>
                        <Route exact path = "/" component={App}/>
                        <Route path = "/photo/:id/:keyw" component={Single}/> 
                        <Route path = "/*" component={NoMatch} /> 
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default Routes;
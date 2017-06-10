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
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

class Routes extends React.Component {
    
    render() {
        return(
            <Router history={history}>
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
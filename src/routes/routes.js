import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import App from '../components/app';
import Single from '../components/single';
import Individual from '../components/Individual';
import NoMatch from '../components/noMatch';

class Routes extends React.Component {
    
    previousLocation = this.props.location

    componentWillUpdate(nextProps) {
        const { location } = this.props
        if (
        nextProps.history.action !== 'POP' &&
        (!location.state || !location.state.modal)
        ) {
        this.previousLocation = this.props.location
        }
    }

    
    render() {
        const { location } = this.props
        const isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location 
        )
        return(
                 <div>
                    <Switch location={isModal ? this.previousLocation : location}>
                        <Route exact path = "/" component={App}/>
                        <Route path = "/photo/:id/:keyw" component={SingleWrapper}/> 
                        <Route path = "/*" component={NoMatch} /> 
                    </Switch>
                    {isModal ? <Route path='/photo/:id/:keyw' component={Single} /> : null}
                </div>
        )
    }
}

export default Routes;
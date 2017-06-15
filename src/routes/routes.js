import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/app';
import Single from '../components/single';
import Individual from '../components/individual';
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
                            {location.state !== undefined ? 
                            <Route path = "/photo/:id/" render={(props) => (
                                <Individual 
                                    headline={location.state.result.headline}
                                    description={location.state.result.description}
                                    keywords={location.state.result.keywords}
                                    orientation={location.state.result.orientation} 
                                    usageTerms={location.state.result.usageTerms}
                                    create_date={location.state.result.create_date}
                                    {...props} />  )}/> :
                            <Route path = "/photo/:id/" component={Individual} /> }
                            <Route path = "/*" component={NoMatch} />
                        </Switch>
                        
                        {isModal ? <Route path='/photo/:id/' render={(props) => (
                            <Single 
                                headline={location.state.result.headline}
                                description={location.state.result.description}
                                keywords={location.state.result.keywords} 
                                orientation={location.state.result.orientation}
                                usageTerms={location.state.result.usageTerms}
                                create_date={location.state.result.create_date}                                
                                {...props} />)} /> : 
                                null}
                    </div>
            )
    }
}

export default Routes;
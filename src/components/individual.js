import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Content from './content';

let f_name="";	

class Individual extends React.Component {

	render() {

		f_name = this.props.match.params.id.slice(0, -4);

		return (
				<div className="cent">
					<Header />
					<div className="row">
						<div className="col-md-2"></div>	
						<div className="col-md-8">
							<Content 
									f_name ={f_name} 
									id={this.props.match.params.id}
									headline={this.props.headline}
									description={this.props.description}
									keywords={this.props.keywords}
									orientation={this.props.orientation} 
									usageTerms={this.props.usageTerms}
									create_date={this.props.create_date}/>
							<Link to='/' className="btn btn-primary backHome">
								Back to Home
							</Link>
						</div>	
						<div className="col-md-2"></div>	
					</div>
					<Footer />
				</div>
		)
	}
}

export default Individual;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

let str;

class Individual extends React.Component {

	render() {
		return (
				<div className="cent">
					<Header />
					<div>
						<img className="image" src={"/photos/" + this.props.match.params.id} alt={this.props.match.params.id}/>
					</div>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<h1>File Name: {str = this.props.match.params.id.slice(0, -4)}</h1>
							<h2><a className="btn btn-success" href={"/ai/" + str + ".ai"}>Download .ai file</a></h2>
							<h2><a className="btn btn-success" href={"/eps/" + str + ".eps"}>Download .eps file</a></h2>
							<h3>Keywords : <li>{this.props.match.params.keyw}</li></h3>
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
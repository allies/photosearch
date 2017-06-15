import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

let f_name="";	

class Individual extends React.Component {

	render() {

		f_name = this.props.match.params.id.slice(0, -4);

		return (
				<div className="cent">
					<Header />
					<div>
						<img className="image" src={"/photos/" + this.props.match.params.id} alt={this.props.match.params.id}/>
					</div>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<h1>File Name: {f_name}</h1>
							<h2><a className="btn btn-success" href={"/ai/" + f_name + ".ai"}>Download .ai file</a></h2>
							<h2><a className="btn btn-success" href={"/eps/" + f_name + ".eps"}>Download .eps file</a></h2>
							<h3>Keywords : <li>{this.props.keywords}</li></h3>
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
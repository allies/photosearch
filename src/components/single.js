import React from 'react';

var str

class Single extends React.Component {
	constructor(props){
		super(props);
		this.setState({ results: []})
	}

render(){
	return (
		<div className="row">
			<div className="col-md-1"></div>		
			<div className="col-md-10">	
				<div className="row">
					<div className="col-md-3">
						<img className="image" src={"/photos/" + this.props.id} alt={this.props.id}/>
					</div>
					<div className="col-md-9">
						<h1>File Name: {str = this.props.id.slice(0, -4)}</h1>
						<h2><a className="btn btn-success" href={"/ai/" + str + ".ai"}>Download .ai file</a></h2>
						<h2><a className="btn btn-success" href={"/eps/" + str + ".eps"}>Download .eps file</a></h2>
						<h3>Keywords : <li>{this.props.keyw}</li></h3>
					</div>
				</div>
			</div>
			<div className="col-md-1"></div>
		</div>
	)
}
}
export default Single;
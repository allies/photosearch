import React from 'react';


let f_name="";		

class Single extends React.Component {

	back = (event) => {
    	event.stopPropagation()
    	this.props.history.goBack()
  	}
	
	render() {
		
		f_name = this.props.match.params.id.slice(0, -4);

		return (
			
			<div className="ModalWrapper">
				<div className="Modal">
					<div className="closeRight">
						<button className="close" onClick={this.back}>X</button>
					</div>
					<div className="cent">
						<div>
							<img className="image" src={"/photos/" + this.props.match.params.id} alt={this.props.match.params.id}/>
						</div>
						<div>
							<h1>File Name: {f_name}</h1>
							<h2><a className="btn btn-success" href={"/ai/" + f_name + ".ai"}>Download .ai file</a></h2>
							<h2><a className="btn btn-success" href={"/eps/" + f_name + ".eps"}>Download .eps file</a></h2>
							<h3>Keywords : <li>{this.props.keywords}</li></h3>
							<button type='button' className="btn btn-primary grow-shadow" onClick={this.back}>
								Close
							</button>
						</div>
					</div>
					</div>
			</div>
		)
	}
}

export default Single;
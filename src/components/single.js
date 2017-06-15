import React from 'react';


let str;
const ModalWrapper= {
					position: 'fixed',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					background: 'rgba(0, 0, 0, 0.15)'
				}
				
const Modal = {
				position: 'fixed',
				background: '#fff',
				top: 25,
				left: '10%',
				right: '10%',
				padding: 15,
				border: '2px solid #444'
			}

class Single extends React.Component {

	back = (e) => {
    	e.stopPropagation()
    	this.props.history.goBack()
  	}
	
	render() {
		return (
			
			<div style={ModalWrapper}>
				<div style={Modal} className="modal-body">
					<div className="closeRight">
						<button className="close" onClick={this.back}>X</button>
					</div>
					<div className="cent">
						<div>
							<img className="image" src={"/photos/" + this.props.match.params.id} alt={this.props.match.params.id}/>
						</div>
						<div>
							<h1>File Name: {str = this.props.match.params.id.slice(0, -4)}</h1>
							<h2><a className="btn btn-success" href={"/ai/" + str + ".ai"}>Download .ai file</a></h2>
							<h2><a className="btn btn-success" href={"/eps/" + str + ".eps"}>Download .eps file</a></h2>
							<h3>Keywords : <li>{this.props.match.params.keyw}</li></h3>
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
import React from 'react';
import Content from './content';


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
						<Content 
							f_name ={f_name} 
							id={this.props.match.params.id}
							headline={this.props.headline}
							description={this.props.description}
							keywords={this.props.keywords}
							orientation={this.props.orientation}
							usageTerms={this.props.usageTerms}
							create_date={this.props.create_date} />
						<button type='button' className="btn btn-primary grow-shadow" onClick={this.back}>
							Close
						</button>
					</div>
					</div>
			</div>
		)
	}
}

export default Single;
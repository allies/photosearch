import React from 'react';
import LazyLoad from 'react-lazy-load';
import Single from './single';

class SingleWrapper extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: []}
        this.open = this.open.bind(this);
		this.close = this.close.bind(this);
    }

    componentWillMount() {
		this.setState({ showModal: false });
		return this.state;
	}

	componentWillUnmount() {
		return false;
	}

    close() {
    	this.setState({ showModal: false });
  	}

  	open() {
    	this.setState({ showModal: true });
  	}

    render() {

        return (
            this.props.results.map((result) => {
					return (
								<li key={ result._source.file_name }>
									<LazyLoad className="lazy">
											<div className="istyle">
											<img onClick={this.open} src={'/photos/' + result._source.file_name} className="image" alt="Search Result" />
											<Modal show={this.state.showModal} onHide={this.close}>
												<Single id={result._source.file_name} keyw={result._source.keywords}/>
											</Modal>
											</div>
									</LazyLoad>
								</li>
							) })	
        )
    }
}

export default SingleWrapper;
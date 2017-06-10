import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import Single from './single';
import { Modal, Button } from 'react-bootstrap';

class SearchResults extends React.Component {

	constructor(props) {
        super(props);
		this.state = { showModal: false }
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}


	componentWillMount() {
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

	render () {
		
		return (
			<div className="cont">
				<hr />
				<div>
				</div>
                <ul>
				{ this.props.results.map((result) => {
					return (
						<li key={ result._source.file_name }>
							<LazyLoad className="lazy">
									<div className="istyle">
									<img onClick={this.open} src={'/photos/' + result._source.file_name} className="image" alt="Search Result" />
									<Button
									bsStyle="primary"
									bsSize="large"
									onClick={this.open}
									>
									Launch demo modal
									</Button>
									<Modal show={this.state.showModal} onHide={this.close}>
									<Single id={result._source.file_name} keyw={result._source.keywords}/>
									</Modal>
									</div>
							</LazyLoad>
						</li>
					) }) }		
				</ul>
			</div>
		)
	}
}



SearchResults.propTypes = {
		results: PropTypes.array
	}

export default SearchResults;
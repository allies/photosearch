import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {

	componentWillMount() {
		return this.state;
	}

	componentWillUnmount() {
		return false;
	}

	render () {
		
		return (
			<div className="cont">
				<hr />
				<div>
				</div>
                <ul>
				{ this.props.results.map((result) => {				//Fetching Each Element
					return (
						<li key={ result._source.file_name }>
							<LazyLoad className="lazy"> 
									<div className="istyle">
										<Link to={{pathname: '/photo/' + result._source.file_name + '/' + result._source.keywords, state: { modal: true }}}>
											<img src={'/photos/' + result._source.file_name} className="image grow-shadow" alt="Search Result" />
										</Link>
									</div>
							</LazyLoad>
						</li>
					) }) }		
				</ul>
			</div>
		)
	}
}



SearchResults.propTypes = {				//Setting the propTypes of the results, i.e Array
		results: PropTypes.array
	}

export default SearchResults;
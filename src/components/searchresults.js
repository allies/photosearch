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
				{ this.props.results.map((result) => {
					return (
						<li key={ result._source.file_name }>
							<LazyLoad className="lazy">
									<div className="istyle">
										{this.close}
										<Link to={{pathname: '/photo/' + result._source.file_name + '/' + result._source.keywords, state: { modal: true }}}>
											<img src={'/photos/' + result._source.file_name} className="image" alt="Search Result" />
										</Link>
									</div>
							</LazyLoad>
						</li>
					) }) }		
				</ul>
				{this.props.children && (
				<div className="overlayStyles">
					{this.props.children}
				</div>
				)}
			</div>
		)
	}
}



SearchResults.propTypes = {
		results: PropTypes.array
	}

export default SearchResults;
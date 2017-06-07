import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import {
  Link
} from 'react-router-dom';

class SearchResults extends React.Component {

	constructor(props) {
        super(props);
		this.state = { results: [] }
	}

	render () {
		return (
			<div className="cont">
				<hr />
                <ul>
				{ this.props.results.map((result) => {
					return (
								<li key={ result._source.file_name }>
									<LazyLoad className="lazy">
										<Link to={"/photo/" + result._source.file_name + "/" + result._source.keywords}>
											<img className="image" src={"http://localhost:3000/photos/" + result._source.file_name} alt="Search Result" />
										</Link>
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
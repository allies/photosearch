import React, { Component } from 'react'
import SearchResults from './searchresults';
import elasticsearch from 'elasticsearch';
import ReactScrollPagination from 'react-scroll-pagination';
import { createStore } from 'redux';
import Nav from '../reducers/reducer';
import { addPage, changePage } from '../actions/actions';

let client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
})

let store = createStore(Nav)

let size = 30;
let from_size = 0;
let search_query = '*';
let oldState;
let max = 0;

export const Size = size;
class Searchbox extends Component {
    constructor(props) {
        super(props);
		this.state = { results: [], notFound: true }
        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
        this.er = this.er.bind(this);
        this.esSearch = this.esSearch.bind(this);
	} 

	componentDidMount() {
        from_size = 0;
        this.esSearch(search_query, from_size);
	}

	handleChange ( event ) {
		search_query = event.target.value + '*';
        from_size = 0;
        this.setState({
                results: []
            });
        this.esSearch(search_query, from_size);
	}

    next() {
        if(from_size<max) {
        from_size += size;
        this.esSearch(search_query, from_size);
        }
    }

    er() {
        console.log("NO MORE PAGES");
    }

	esSearch( sq, from ) {
		var search_query = sq;

		client.search({
			index: 'photos',
			type: 'photo',
			q: search_query,
			size: size,
			from: from
		}).then(function ( body ) {
			if(body.hits.max_score===null) {
				this.setState({notFound: true})
			}
			else {
				this.setState({notFound: false})
			}
            max = body.hits.total
			oldState = this.state.results.slice();
            body.hits.hits.forEach(function (searchResult) {
                oldState.push(searchResult)    
            });
            this.setState({
                results: oldState
            });
		}.bind(this), function ( error ) {
			console.trace( error.message );

		});
	}

	renderNotFound() {
    return <div className="notFound">No Vectors found. Try a different search.</div>;
  	}

	renderPosts() {

        console.log(this.state);
		return(
			<div className="results">
                        <SearchResults key={this.from_size} results={ this.state.results } />
                          <ReactScrollPagination
                          fetchFunc={this.next.bind(this)}
                            />
                    </div>
		)
	}
    
    render() {

        const { notFound } = this.state;
        return (
            <div>
                <input 
                    id="search" 
                    className="form-control form fix" 
                    type="text" 
                    placeholder="Start Searching" 
                    name="search" 
                    onChange={ this.handleChange }
                ></input>
					<div>
						{notFound ? this.renderNotFound() : this.renderPosts()}
					</div>
            </div>
        )
    }

}

export default Searchbox;
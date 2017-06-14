import React, { Component } from 'react'
import SearchResults from './searchresults';
import elasticsearch from 'elasticsearch';
import ReactScrollPagination from 'react-scroll-pagination';

let client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
})

let size = 30;
let from_size = 0;
let search_query = '*';
let oldState;
let max = 0;

class Searchbox extends Component {
    constructor(results, notFound, props) {                 //Initializing the functions
        super(results, notFound, props);
		this.state = { results: [], notFound: true }
        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
        this.esSearch = this.esSearch.bind(this);
	} 

	componentDidMount() {                                   //Starting React Component Lifecycle
        from_size = 0;
        this.esSearch(search_query, from_size);
	}

    componentWillUnmount() {                                //Unmounting the Component
    return true;
  }

  componentWillUpdate() {                                   //Not to update the component on component
      return false;                                         //change
  }

	handleChange ( event ) {                            //Fetching Results While Typing
		search_query = event.target.value + '*';
        from_size = 0;
        this.setState({
                results: []                             //Array in which Results are stored
            });
        this.esSearch(search_query, from_size);
	}

    next() {                                            //Scroll to next set of results
        if(from_size<max) {
        from_size += size;
        this.esSearch(search_query, from_size);
        }
    }

	esSearch( sq, from ) {                              //Passing the query to elasticsearch
		var search_query = sq;

		client.search({
			index: 'photos',                            //Query Parameters
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
			oldState = this.state.results.slice();              //A new array to store data, to avoid
            body.hits.hits.forEach(function (searchResult) {    //Mutability
                oldState.push(searchResult)    
            });
            this.setState({
                results: oldState
            });
		}.bind(this), function ( error ) {
			console.trace( error.message );

		});
	}

	renderNotFound() {                                   //Display Not found if query returns nothing
    return <div className="notFound">No Vectors found. Try a different search.</div>;
  	}

	renderPosts() {

		return(                                         //Displays the query search results
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
                    name="s_query" 
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
import React from 'react'
import SearchResults from './searchresults';
import elasticsearch from 'elasticsearch';

let client = new elasticsearch.Client({
	host: '192.168.1.46:9200',
	log: 'trace'
})


var size = 20;
var from_size = 0;
var search_query = '*'

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
		this.state = { results: [], notFound: true }
        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.er = this.er.bind(this);
        this.esSearch = this.esSearch.bind(this);
	} 

	componentWillMount() {
		search_query = '*';
        this.esSearch(search_query, from_size);
	}

	handleChange ( event ) {
		search_query = event.target.value + '*';
        from_size = 0;
        this.esSearch(search_query, from_size);
	}

    next() {
        from_size += size;
        if(from_size<=size) {
        console.log(from_size);
        console.log(search_query);
        this.esSearch(search_query, from_size);
    }
        else {
            this.er();
            from_size -= size;
        }
    }

    prev() {
        from_size -= size;
        if(from_size>=0) {
        console.log(from_size);
        console.log(search_query);
        this.esSearch(search_query, from_size);
    }
        else {
            this.er();
            from_size += size;
        }
    }

    er() {
        console.log("ERROR");
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
			this.setState({ results: body.hits.hits })
		}.bind(this), function ( error ) {
			console.trace( error.message );

		});
	}

	renderNotFound() {
    return <div>No Vectors found. Try a different search.</div>;
  	}

	renderPosts() {

		return(
			<div className="results">
                        <SearchResults key={this.from_size} results={ this.state.results } />
						<button id="prev" type="button" className="btn btn-primary" onClick={this.prev} >Prev</button>
                        <button id="next" type="button" className="btn btn-primary" onClick={this.next} >Next</button>
                    </div>
		)
		
	}
    
    render() {

        const { notFound } = this.state;

        return (
            <div>
                <input id="search" className="form-control form" type="text" placeholder="Start Searching" name="search" onChange={ this.handleChange }></input>
					<div>
						{notFound ? this.renderNotFound() : this.renderPosts()}
					</div>
            </div>
        )
    }

}

export default Searchbox;
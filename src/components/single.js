import React from 'react';

var str

var Single = ({match}) => (
	<div className="row">		
		<div className="col-md-3">
        	<img src={"/photos/" + match.params.id} alt={match.params.id}/>
		</div>
		<div className="col-md-9">
			<h1>File Name: {str = match.params.id.slice(0, -4)}</h1>
			<h2><a className="btn btn-success" href={"/ai/" + str + ".ai"}>Download .ai file</a></h2>
			<h2><a className="btn btn-success" href={"/eps/" + str + ".eps"}>Download .eps file</a></h2>
			{console.log(match.params.keyw)}
			<h3>Keywords : <li>{match.params.keyw}</li></h3>
		</div>
	</div>
)

export default Single;
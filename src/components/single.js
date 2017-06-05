import React from 'react';



var Single = ({match}) => (
    <div>
		<div className="istyle">
        	<img src={"/photos/" + match.params.id} alt={match.params.id}/>
		</div>
		<div>
			<h1>I am Single</h1>
		</div>
	</div>
)

export default Single;
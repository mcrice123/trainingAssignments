// Component that renders an input box for text in HTML
// Author: Maria Rice

import React, { Component } from 'react';

const TextInputComponent = (props) => {
	return(
		<div className="text-input">
			<div>{props.name}</div>
			<input placeholder={props.placeholder} onChange={props.onChange} />
		</div>
	);
}
export default TextInputComponent;
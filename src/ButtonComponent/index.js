// Component that renders a button in HTML
// Author: Maria Rice


import React, { Component } from 'react';

const ButtonComponent = (props) => {
	const primary = props.primary ? ' primary' : '';

	return(
		<div>
		<button className={`btn${primary}`} type="button">{props.value}</button>
		</div>
	);
}
export default ButtonComponent;
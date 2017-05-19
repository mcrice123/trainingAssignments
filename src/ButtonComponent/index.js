import React, { Component } from 'react';

//import '../../style/style.css';

const ButtonComponent = (props) => {
	const primary = props.primary ? ' primary' : '';

	return(
		<div>
		<button className={`btn${primary}`} type="button">{props.value}</button>
		</div>
	);
}
export default ButtonComponent;
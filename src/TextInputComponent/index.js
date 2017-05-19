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
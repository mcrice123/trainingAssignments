// Component that renders an h2 header in HTML
// Author: Maria Rice

import React, { Component } from 'react';

const HeaderTwoComponent = (props) => {
	return(
		<h2 className="head2">{props.value}</h2>
	);
}
export default HeaderTwoComponent;
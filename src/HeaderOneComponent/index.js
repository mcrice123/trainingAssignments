// Component that renders an h1 header in HTML
// Author: Maria Rice

import React, { Component } from 'react';

const HeaderOneComponent = (props) => {
	return(
		<h1 className="head1">{props.value}</h1>
	);
}
export default HeaderOneComponent;
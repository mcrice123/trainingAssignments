// Component that renders an h3 header in HTML
// Author: Maria Rice

import React, { Component } from 'react';

const HeaderThreeComponent = (props) => {
	return(
		<h3 className="head3">{props.value}</h3>
	);
}
export default HeaderThreeComponent;
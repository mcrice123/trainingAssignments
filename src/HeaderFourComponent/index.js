// Component that renders an h4 header in HTML
// Author: Maria Rice

import React, { Component } from 'react';

const HeaderFourComponent = (props) => {
	return(
		<h4 className="head4">{props.value}</h4>
	);
}
export default HeaderFourComponent;
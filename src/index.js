import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ButtonComponent from './ButtonComponent';
import HeaderOneComponent from './HeaderOneComponent';
import HeaderTwoComponent from './HeaderTwoComponent';
import HeaderThreeComponent from './HeaderThreeComponent';
import HeaderFourComponent from './HeaderFourComponent';
import TextInputComponent from './TextInputComponent';

class App extends Component {
	render() {
		return( 
			<div>
				<ButtonComponent value='Button Text' />
				<HeaderOneComponent value='Header 1' />
				<HeaderTwoComponent value='Header 2' />
				<HeaderThreeComponent value='Header 3' />
				<HeaderFourComponent value='Header 4'/>
				<TextInputComponent />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
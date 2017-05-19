// The app component for demonstrating the use of various functional components.
// Author: Maria Rice

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ButtonComponent from './ButtonComponent';
import HeaderOneComponent from './HeaderOneComponent';
import HeaderTwoComponent from './HeaderTwoComponent';
import HeaderThreeComponent from './HeaderThreeComponent';
import HeaderFourComponent from './HeaderFourComponent';
import TextInputComponent from './TextInputComponent';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cat: ' '
		}
	}

	onInputChange(event) {
		this.setState({ cat: event.target.value });
	}

	render() {
		return( 
			<div>
				<ButtonComponent value='Primary Button' primary={true} />
				<ButtonComponent value='Secondary Button' primary={false} />
				<HeaderOneComponent value='Header 1' />
				<HeaderTwoComponent value='Header 2' />
				<HeaderThreeComponent value='Header 3' />
				<HeaderFourComponent value='Header 4'/>
				<TextInputComponent 
					type="text" 
					name="Your cat's name:"
					placeholder='Whiskers' 
					onChange={event => this.onInputChange(event)}
					/>
				<div><div id="the-best">{this.state.cat}</div> is the best!</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
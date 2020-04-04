import React, { Component } from 'react';

import Toppers from './toppers/Toppers'
import computer from './computer.jpg';

class Home extends Component {

	render() {
		let computerStyle = {
			width: '100%',
			height: '100vh'
		};

		let vivekcompTextStyle = {
			position: 'absolute',
			marginTop: '200px',
			marginLeft: '150px',
			width: '600px',
			color: '#696969',
			fontSize: '26px',
			textShadow: '1px 1px gray',
			fontFamily: 'PT Sans Narrow, sans-serif'
		};

		let fontSize = {
			fontSize: '18px'
		};

		return(
			<>
				<div style={computerStyle}>
					<span style={vivekcompTextStyle}>"Everybody in this country should learn how to program a computer, because it teaches you how to think."<br/><span style={fontSize}>- Steve Jobs</span></span>
					<img src={computer} style={computerStyle} alt=""/>
				</div>

				<Toppers/>
			</>
		);
	}
}

export default Home;
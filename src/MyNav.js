import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Home from './Home';
import Courses from './Courses';
import Result from './Result';
import OnlineExams from './OnlineExams';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './footer/Footer';

import logo from './logo.jpg';
import './MyNav.css';

class MyNav extends Component {
	constructor() {
		super();
		
		this.state = {
			navHeight: '100px'
		};

		this.resizeNav = this.resizeNav.bind( this );
	}

	componentDidMount() {
		window.addEventListener( 'scroll', this.resizeNav );
	}

	componentWillUnmount() {
		window.removeEventListener( 'scroll', this.resizeNav );
	}

	resizeNav() {
		this.setState( {
			navHeight: ( 50 < window.pageYOffset ) ? '50px' : '100px'
		} );
	}

	render() {
		let navHeightStyle = {
			height: this.state.navHeight
		};

		let navbarBgColorStyle = {
			height: this.state.navHeight,
			backgroundColor: ( '50px' === this.state.navHeight ) ? 'whitesmoke' : 'transparent'
		};		

		return(
			<>
				<Router>
					<nav id="nav-bar" style={navbarBgColorStyle}>
						<div className="logo">
							<img src={logo} alt="Vivek Computers" style={navHeightStyle}/>
						</div>
						<div className="menu" style={navHeightStyle}>
							<ul style={navHeightStyle}>
								<li><NavLink exact={true} activeClassName='active' to="/">Home</NavLink></li>
								<li><NavLink activeClassName='active' to="/courses">Courses</NavLink></li>
								<li><NavLink activeClassName='active' to="/result">Result</NavLink></li>
								<li><NavLink activeClassName='active' to="/online_exams">Online Exams</NavLink></li>
								<li><NavLink activeClassName='active' to="/about_us">About Us</NavLink></li>
								<li><NavLink activeClassName='active' to="/contact_us">Contact Us</NavLink></li>
							</ul>
						</div>
					</nav>

					<Route exact path="/" component={Home} />
					<Route exact path="/courses" component={Courses} />
					<Route exact path="/result" component={Result} />
					<Route exact path="/online_exams" component={OnlineExams} />
					<Route exact path="/about_us" component={AboutUs} />
					<Route exact path="/contact_us" component={ContactUs} />
				</Router>

				<Footer/>
			</>
		);
	}
}

export default MyNav;
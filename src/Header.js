import React, { Component } from 'react'
import App from './App'
import './Header.css'


class Header extends Component {

	render() {

	return (
		<React.Fragment>
			<h1><span className="blue">&lt;</span>Task<span className="blue">&gt;</span> <span className="yellow">Manager</span></h1>
		<h2>Created with love by <a href="https://github.com/aggads?tab=repositories"> Samy</a></h2>
		<div id="container">   	
			<p><a>Vivyane</a></p>
			<p><a>Samy</a></p>
			<p><a>Pierre</a></p>
			<p><a>Flore</a></p>
			<p><a>Delaine</a></p>
			<p><a>		
			</a></p>
		</div>
		</React.Fragment>
			)
	}
}

export default Header
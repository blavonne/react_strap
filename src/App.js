import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apps: [
				{id: 1, name: "Application1", active: true},
				{id: 2, name: "Application2", active: false},
				{id: 3, name: "Application3", active: false},
				{id: 4, name: "Application4", active: false},
				{id: 5, name: "Application5", active: false},
				{id: 6, name: "Application6", active: false},
				{id: 7, name: "Application7", active: false},
			]
		};
		this.setActive = this.setActive.bind(this)
	}

	setActive(id) {
		const apps = this.state.apps.map(a => Object.assign({}, a));
		apps.map(app => {
			app.active = app.id === id;
			return app
		})
		this.setState({apps : apps })
		console.log('what is this', this)
	}

	renderNav() {
		return (
			<div className="Navigation">
				<NavBar
					apps={this.state.apps}
					onClick={this.setActive}
				/>
			</div>
		)
	}

	render() {
		return (
			<div className="App">
				{this.renderNav()}
				<div className="Content">Content</div>
			</div>
		);
	}
}

export default App;

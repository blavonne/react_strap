import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Router from "./components/Router/Router";

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apps: [
				{id: 1, name: "Application1", active: false, content: "/Application1/"},
				{id: 2, name: "Application2", active: false, content: "/Application2/"},
				{id: 3, name: "Application3", active: false, content: "/Application3/"},
				{id: 4, name: "Application4", active: false, content: "/Application4/"},
				{id: 5, name: "Application5", active: false, content: "/Application5/"},
				{id: 6, name: "Application6", active: false, content: "/Application6/"},
				{id: 7, name: "Application7", active: false, content: "/Application7/"},
			]
		}; //можно убрать поле content и сшивать строку в навигации средствами js
		this.setActive = this.setActive.bind(this) //бинд нужен, чтобы работал setState
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
			<NavBar
				apps={this.state.apps}
				onClick={this.setActive}
			/>
		)
	}

	renderContent() {
		return (
			<Router/>
		)
	}

	render() {
		return (
			<div className="App">
				{this.renderNav()}
				{this.renderContent()}
			</div>
		);
	}
}

export default App;

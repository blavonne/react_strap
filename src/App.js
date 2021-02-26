import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import {Home, About} from "./components/Content/Content";
import {Switch, Route} from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apps: [
				{id: 1, name: "Application1", active: true, content: "/Application1"},
				{id: 2, name: "Application2", active: false, content: "/Application2"},
				{id: 3, name: "Application3", active: false, content: "/Application3/"},
				{id: 4, name: "Application4", active: false, content: "/Application4/"},
				{id: 5, name: "Application5", active: false, content: "/Application5/"},
				{id: 6, name: "Application6", active: false, content: "/Application6/"},
				{id: 7, name: "Application7", active: false, content: "/Application7/"},
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
				<div className="Content">
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/Application2' component={About}/>
						<Route path='/Application1' component={Home}/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;

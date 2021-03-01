import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Router from "./components/Router/Router";
import { Row, Col } from 'reactstrap';

//можно убрать поле content и сшивать строку в навигации средствами js
const initialApps = [
	{id: 1, name: "Application1", active: false, content: "/Application1/"},
	{id: 2, name: "Application2", active: false, content: "/Application2/"},
	{id: 3, name: "Application3", active: false, content: "/Application3/"},
	{id: 4, name: "Application4", active: false, content: "/Application4/"},
	{id: 5, name: "Application5", active: false, content: "/Application5/"},
	{id: 6, name: "Application6", active: false, content: "/Application6/"},
	{id: 7, name: "Application7", active: false, content: "/Application7/"}
];


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apps: initialApps
		};
		this.setActive = this.setActive.bind(this); //бинд нужен, чтобы работал setState
		this.filterList = this.filterList.bind(this);
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
				update={this.filterList}
			/>
		)
	}

	renderContent() {
		return (
			<Router/>
		)
	}

	filterList(apps) {
		this.setState({apps: apps});
	}

	render() {
		return (
			<Row>
				<Col xs="auto" sm="auto" md="auto" lg="auto">
					{this.renderNav()}
				</Col>
				<Col>
					{this.renderContent()}
				</Col>
			</Row>
		);
	}
}

export default App;

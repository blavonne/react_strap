import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import {Col, Row} from 'reactstrap';
import Router from "./components/Router/Router";
import PropTypes from "prop-types";

//можно убрать поле content и сшивать строку в навигации средствами js
const initialApps = [
	{id: 1, name: "Экономика", active: false, content: "/Application1/", display: true},
	{id: 2, name: "Политика", active: false, content: "/Application2/", display: true},
	{id: 3, name: "Слоники", active: false, content: "/Application3/", display: true},
	{id: 4, name: "Сложная математика", active: false, content: "/Application4/", display: true},
	{id: 5, name: "Соленые чипсы", active: false, content: "/Application5/", display: true},
	{id: 6, name: "Кока-кола", active: false, content: "/Application6/", display: true},
	{id: 7, name: "Макет", active: false, content: "/Application7/", display: true}
];


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			apps: initialApps
		};
		this.setActive = this.setActive.bind(this); //бинд нужен, чтобы работал setState
		this.filterList = this.filterList.bind(this); //фильтрация меню через поисковую строку
	}

	setActive(id) {
		const apps = this.state.apps.map(a => Object.assign({}, a));
		apps.map(app => {
			app.active = app.id === id;
			return app
		})
		this.setState({ apps : apps })
	}

	renderNav() {
		return (
			<NavBar
				apps={this.state.apps}
				onClick={this.setActive}
				filter={this.filterList}
			/>
		);
	};

	renderContent() {
		return (
			<Router apps={this.state.apps}/>
		)
	};

	filterList(id) {
		this.setState(function (state) {
			return (
				state.apps.map(app => {
					app.display = id.includes(app.id);
				})
			);
		});
	};

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

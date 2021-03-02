import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Router from "./components/Router/Router";

const initialApps = [
	{id: 1, name: "Экономика", active: false, display: true},
	{id: 2, name: "Политика", active: false, display: true},
	{id: 3, name: "Слоники", active: false, display: true},
	{id: 4, name: "Сложная математика", active: false, display: true},
	{id: 5, name: "Соленые чипсы", active: false, display: true},
	{id: 6, name: "Кока-кола", active: false, display: true},
	{id: 7, name: "Макет", active: false, display: true}
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
			<div className="App">
				{this.renderNav()}
				{this.renderContent()}
			</div>
		);
	}
}

export default App;

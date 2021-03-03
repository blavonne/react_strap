import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import { Spinner } from 'reactstrap';

/*
примет от Route id и исходя из id будет формировать контент

componentDidUpdate используется, чтобы обновить стейт, если обновились пропсы, иначе
не перерисуется

setApplication ищет совпадение между пропсами роута и каким-нибудь полем данных (в данном случае пока name)
и возвращает объект типа apps
 */

class Application extends React.Component {
	constructor(props) {
		super(props);
		this.application = null;
		this.state = {
			show: true,
			isLoading: true
		}
	}

	setApplication() {
		let match = null;
		this.props.apps.map(app => {
			if (app.name === this.props.match.params.name) {
				return match = app
			}
		})
		return match
	}

	componentDidMount() {
		setTimeout(() => this.setState({ isLoading: false }), 2000); // имитация асинхронного вызова
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.name !== this.props.match.params.name) {
			this.setState({show : false})
		}
	}

	render() {
		if (this.state.isLoading)
			return <Spinner color="primary">{''}</Spinner>
		this.application = this.setApplication()
		if (this.application === null)
			return <Redirect to="/404"/>
		else
		return (
			<div className="AppInfo">
				<div>
					<h1>Это страница {this.application.name}</h1>
				</div>
				<div>
					Id: {this.application.id}
				</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat neque purus. Fusce elementum commodo fermentum. Nam enim nibh, tristique non condimentum quis, sagittis in est. Sed porttitor, mauris finibus condimentum auctor, ex lectus eleifend ante, at faucibus augue sapien vel velit. Vivamus non ullamcorper tellus. Nunc fringilla velit et augue dapibus dictum. Suspendisse vestibulum lobortis posuere. Integer malesuada odio non malesuada faucibus. Nam ornare mattis nunc, non dictum augue. Sed volutpat imperdiet iaculis. Aliquam ultrices maximus nisi eu malesuada. Vestibulum ullamcorper orci vel augue varius scelerisque. Duis condimentum erat sed diam efficitur dictum. Sed vestibulum neque eget tempor ultrices.
				</div>
			</div>
		)
	}
}

/*
тот же компонент, но в функциональном стиле
 */
// function Application2 (props) {
// 	console.log('Application', props)
// 	let application = null
//
// 	function checkInput() {
// 		props.apps.map(app => {
// 			if (app.name === props.match.params.name) {
// 				return application = app
// 			}
// 		})
// 		return application !== null;
// 	}
//
// 	if (!checkInput())
// 		return <Redirect to="/404"/>
//
// 	return (
// 		<div className="AppInfo">
// 			<div>
// 				<h1>Это страница {application.name}</h1>
// 			</div>
// 			<div>
// 				Id: {application.id}
// 			</div>
// 			<div>
// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat neque purus. Fusce elementum commodo fermentum. Nam enim nibh, tristique non condimentum quis, sagittis in est. Sed porttitor, mauris finibus condimentum auctor, ex lectus eleifend ante, at faucibus augue sapien vel velit. Vivamus non ullamcorper tellus. Nunc fringilla velit et augue dapibus dictum. Suspendisse vestibulum lobortis posuere. Integer malesuada odio non malesuada faucibus. Nam ornare mattis nunc, non dictum augue. Sed volutpat imperdiet iaculis. Aliquam ultrices maximus nisi eu malesuada. Vestibulum ullamcorper orci vel augue varius scelerisque. Duis condimentum erat sed diam efficitur dictum. Sed vestibulum neque eget tempor ultrices.
// 			</div>
// 		</div>
// 	)
// }

const Index = () => (
	<h1>This is default page!</h1>
)

export {Application, Index};

Application.propTypes = {
	apps : PropTypes.array
}

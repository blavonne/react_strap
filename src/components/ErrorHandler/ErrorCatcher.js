import React from 'react';
import ErrorPage from "./ErrorPage";

/*
Пока не используется, но потенциально есть
 */

class ErrorCatcher extends React.Component {
	state = {
		hasError: false,
	}

	componentDidCatch(error) {
		// Здесь можно отправлять данные в сервис сбора ошибок
		this.setState({ hasError: true });
	}

	render() {
		console.log('ErrorCatcher msg', this.props.errorMessage)
		if (this.state.hasError) {
			return (
				<ErrorPage errorMessage={this.props.errorMessage}/>
			);
		}
		return this.props.children;
	}
}

export default ErrorCatcher;
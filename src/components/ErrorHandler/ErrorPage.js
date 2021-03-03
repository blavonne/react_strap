import React from 'react';
import {Button} from "reactstrap";
import {Redirect} from "react-router-dom";


/*
Впервые применила componentDidMount, чтобы снять активный статус с кнопок
Без этого метода ругался на изменение состояния в процессе рендера
 */

class ErrorPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPressedButton: false
		}
	}

	componentDidMount() {
		this.props.resetActive()
	}

	clickErrorButton = () => {
		this.setState({isPressedButton : true})
	}

	render() {
		const {isPressedButton} = this.state
		if (isPressedButton)
			return <Redirect to="/"/>
		return (
			<div className="ErrorPage">
				{this.props.errorMessage}
				<div>
					<Button color="danger" size="lg" onClick={this.clickErrorButton}>Go home</Button>
				</div>
			</div>
		)
	}
}

export default ErrorPage;
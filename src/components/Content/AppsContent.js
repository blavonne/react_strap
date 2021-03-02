import React from "react";
import PropTypes from "prop-types";

/*
примет от Route id и исходя из id будет формировать контент
 */

function App1 (props) {
	console.log('App1', props)
	let application
	props.apps.apps.map(app => {
		if (app.name === props.match.params.name) {
			return application = app
		}
	})
	if (application === undefined)
		return null
	return (
		<div>
			<div>
				<h1>Это страница {application.name}</h1>
			</div>
			<div>
				Id: {application.id}
			</div>
		</div>
	)
}

const Index = () => (

	<h1>This is default page!</h1>

)

export {App1, Index};

App1.propTypes = {
	apps : PropTypes.object
}
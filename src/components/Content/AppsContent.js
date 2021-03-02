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
		<div className="AppInfo">
			<div>
				<h1>Это страница {application.name}</h1>
			</div>
			<div>
				Id: {application.id}
			</div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat neque purus. Fusce elementum commodo fermentum. Nam enim nibh, tristique non condimentum quis, sagittis in est. Sed porttitor, mauris finibus condimentum auctor, ex lectus eleifend ante, at faucibus augue sapien vel velit. Vivamus non ullamcorper tellus. Nunc fringilla velit et augue dapibus dictum. Suspendisse vestibulum lobortis posuere. Integer malesuada odio non malesuada faucibus. Nam ornare mattis nunc, non dictum augue. Sed volutpat imperdiet iaculis. Aliquam ultrices maximus nisi eu malesuada. Vestibulum ullamcorper orci vel augue varius scelerisque. Duis condimentum erat sed diam efficitur dictum. Sed vestibulum neque eget tempor ultrices.
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
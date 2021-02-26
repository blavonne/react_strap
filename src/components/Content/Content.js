import React from "react";

class Content extends React.Component {
	render() {
		return (
				<div className="ContentApp1">ContentApp1</div>
		);
	};
}

const Home = () => (
	<div>
		<h1>This is home page!</h1>
	</div>
)

const About = () => (
	<div>
		<h1>This is about page!</h1>
	</div>
)

export default Content;
export {Home};
export {About};
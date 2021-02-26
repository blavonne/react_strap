import React from 'react';
import { Nav } from 'reactstrap';
import NavItemList from "./NavItemList";

const NavBar = (props) => {
	return (
		<div className="NavBar">
			<Nav pills vertical>
				<NavItemList apps={props.apps} toggleHandler={props.onClick}/>
			</Nav>
		</div>
	);
}

export default NavBar;
import React from 'react';
import { Nav } from 'reactstrap';
import NavItemList from "./NavItemList";
import Search from "./Search";

const NavBar = (props) => {
	return (
		<div className="NavBar">
			<Search apps={props.apps} update={props.update}/>
			<Nav pills vertical>
				<NavItemList apps={props.apps} toggleHandler={props.onClick}/>
			</Nav>
		</div>
	);
}

export default NavBar;
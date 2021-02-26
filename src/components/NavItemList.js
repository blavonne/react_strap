import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

const NavListItem = (props) => {
	return (
			props.apps.map(app => {
				return (
					<NavItem key={app.id} onClick={() => props.toggleHandler(app.id)}>
						<NavLink href="#">
							{app.name}
						</NavLink>
					</NavItem>
				)
			})
	);
}
/*
после onClick нужна стрелочная функция, чтобы организовать коллбэк, иначе выполнится сразу
 */

export default NavListItem;
import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

const NavListItem = (props) => {
	return (
			props.apps.map(app => {
				return (
					<NavItem key={app.id} onClick={() => props.toggleHandler(app.id)}>
						<NavLink href="#" className={app.active ? "active" : ""}>
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
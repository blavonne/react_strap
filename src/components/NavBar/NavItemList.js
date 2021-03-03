import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const NavListItem = (props) => {
	return (
			props.apps.map(app => {
				if (app.display)
					return (
						<NavItem key={app.id} onClick={() => props.toggleHandler(app.id)}>
							<NavLink tag={RRNavLink} to={app.name} className={app.active ? "active" : ""}>
								{app.name}
							</NavLink>
						</NavItem>
					)
				else
					return null
			})
	);
}

/*
после onClick нужна стрелочная функция, чтобы организовать коллбэк, иначе выполнится сразу
tag={RRNavLink} включает навлинк из ррдома
 */

export default NavListItem;

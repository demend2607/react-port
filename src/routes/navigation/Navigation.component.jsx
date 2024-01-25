import { Fragment } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation-container">
				<Link to="/" className="logo-container nav-link">
					HOME
				</Link>
				<div className="navigation-links">
					<Link className="nav-link" to="/quote">
						QUOTE
					</Link>
					<Link className="nav-link" to="/scroll">
						SCROLL
					</Link>
				</div>
			</div>
			<div className="global-container">
				<Outlet />
			</div>
		</Fragment>
	);
};

export default Navigation;

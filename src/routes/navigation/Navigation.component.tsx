import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';

import Toggle from '../../components/buttons/toggle/Toggle.component';
import './navigation.styles.scss';

const Navigation = () => {
	const { toggleTheme, themeValue } = useContext(ThemeContext);
	return (
		<Fragment>
			<div className="navigation-container">
				<Link to="/" className="logo-container nav-link">
					Home
				</Link>
				<div className="navigation-links">
					<Link className="nav-link" to="/quote">
						Quote
					</Link>
					<Link className="nav-link" to="/scroll">
						Scroll
					</Link>
					<Link className="nav-link" to="/countdown">
						Countdown
					</Link>
					<Link className="nav-link" to="/todo">
						TodoList
					</Link>
				</div>
				<Toggle />
			</div>
			<div className="global-container">
				<Outlet />
			</div>
		</Fragment>
	);
};

export default Navigation;

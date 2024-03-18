import { useDispatch, useSelector } from 'react-redux';
import ReactSwitch from 'react-switch';

import { selectThemeValue } from '../../../store/theme/theme.selector';
import { toggleTheme } from '../../../store/theme/theme.slice';

const Toggle = () => {
	const dispatch = useDispatch();
	const themeValue = useSelector(selectThemeValue);
	const handleThemeToggle = () => {
		dispatch(toggleTheme());
	};

	return (
		<div className="switch">
			<ReactSwitch checked={themeValue === 'custom'} onChange={handleThemeToggle} />
		</div>
	);
};

export default Toggle;

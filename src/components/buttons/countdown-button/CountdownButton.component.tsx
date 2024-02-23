import { FC, ButtonHTMLAttributes } from 'react';
import './countdownButton.styles.scss';

const CountdownButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...otherprops }) => {
	return (
		<>
			<button className="countdown-btn" {...otherprops}>
				{children}
			</button>
		</>
	);
};
export default CountdownButton;

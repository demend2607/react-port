import './countdownButton.styles.scss';

const CountdownButton = ({ children, type, ...otherprops }) => {
	return (
		<>
			<button type={type} className="countdown-btn" {...otherprops}>
				{children}
			</button>
		</>
	);
};
export default CountdownButton;

import './countdownButton.styles.scss';

const CountdownButton = ({ children, ...otherprops }) => {
	return (
		<>
			<button className="countdown-btn" {...otherprops}>
				{children}
			</button>
		</>
	);
};
export default CountdownButton;

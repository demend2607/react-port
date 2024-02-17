import './quoteButton.styles.scss';

const BUTTON_TYPE_CLASSES = {
	twitter: 'twitter-button',
	default: 'new-quote',
};

const QuoteButton = ({ children, buttonType, ...otherProps }) => {
	return (
		<>
			<button className={`quote-button ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
				{children}
			</button>
		</>
	);
};
export default QuoteButton;

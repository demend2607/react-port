import './quoteText.styles.scss';

const QuoteText = ({ quote }) => {
	return (
		<div className="quote-text">
			<i className="fas fa-quote-left"></i>
			<span className="quote">{quote}</span>
		</div>
	);
};

export default QuoteText;

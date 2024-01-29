import './quoteAuthor.styles.scss';
const QuoteAuthor = ({ author }) => {
	return (
		<div className="quote-author">
			<span className="author">{author}</span>
		</div>
	);
};

export default QuoteAuthor;

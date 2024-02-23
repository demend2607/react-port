import { FC } from 'react';
import './quoteText.styles.scss';

type QuoteProps = {
	quote: string;
};

const QuoteText: FC<QuoteProps> = ({ quote }) => {
	return (
		<div className="quote-text">
			<i className="fas fa-quote-left"></i>
			<span className="quote">{quote}</span>
		</div>
	);
};

export default QuoteText;

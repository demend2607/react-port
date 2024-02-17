import { useState, useEffect } from 'react';

import QuoteText from './../../components/quoteText/QuoteText.component';
import QuoteAuthor from './../../components/quoteAuthor/QuoteAuthor.component';
import Spinner from './../../components/spinner/Spinner.component';
import QuoteButton from '../../components/buttons/quote-Button/QuoteButton.component';

import './quoteGenerate.styles.scss';

const QuoteGenerate = () => {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchQuote();
	}, []);

	const fetchQuote = async () => {
		setIsLoading(true);
		const response = await fetch('https://type.fit/api/quotes');
		const quoteList = await response.json();

		let randomNum = Math.floor(Math.random() * quoteList.length);
		let randomQuote = quoteList[randomNum];

		setQuote(randomQuote.text);
		setAuthor(randomQuote.author);
		setIsLoading(false);
	};
	const changeQuoteHandle = () => {
		fetchQuote();
	};

	const twitterHandle = () => {
		const twitterUrl = `https://twitter.com/intext/tweet?text=${quote} - ${author}`;
		window.open(twitterUrl, '_blank');
	};
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="quote-container">
					<QuoteText quote={quote} />
					<QuoteAuthor author={author} />
					<div className="button-container">
						<QuoteButton buttonType="twitter" title="Tweet" onClick={twitterHandle}>
							<i className="fab fa-twitter"></i>
						</QuoteButton>
						<QuoteButton buttonType="default" onClick={changeQuoteHandle}>
							New Quote
						</QuoteButton>
					</div>
				</div>
			)}
		</>
	);
};

export default QuoteGenerate;

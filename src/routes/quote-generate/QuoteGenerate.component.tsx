import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import QuoteText from '../../components/quoteText/QuoteText.component';
import QuoteAuthor from '../../components/quoteAuthor/QuoteAuthor.component';
import Spinner from '../../components/spinner/Spinner.component';
import QuoteButton, {
	BUTTON_TYPE_CLASSES,
} from '../../components/buttons/quote-Button/QuoteButton.component';

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
		toast('Loading new quote...', { icon: '🔃' });
		setIsLoading(true);
		setTimeout(() => {
			fetchQuote();
		}, 1000);
	};

	const twitterHandle = () => {
		const twitterUrl = `https://twitter.com/intext/tweet?text=${quote} - ${author}`;
		window.open(twitterUrl, '_blank');
	};
	return (
		<div className="quote-generate">
			<Toaster />
			<h1>Quote Generator</h1>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="quote-container">
					<QuoteText quote={quote} />
					<QuoteAuthor author={author} />
					<div className="button-container">
						<QuoteButton buttonType={BUTTON_TYPE_CLASSES.twitter} title="Tweet" onClick={twitterHandle}>
							<i className="fab fa-twitter"></i>
						</QuoteButton>
						<QuoteButton buttonType={BUTTON_TYPE_CLASSES.default} onClick={changeQuoteHandle}>
							New Quote
						</QuoteButton>
					</div>
				</div>
			)}
		</div>
	);
};

export default QuoteGenerate;

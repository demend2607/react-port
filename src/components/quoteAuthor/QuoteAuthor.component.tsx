import { FC } from 'react';

import './quoteAuthor.styles.scss';

type AuthorProps = {
	author: string;
};

const QuoteAuthor: FC<AuthorProps> = ({ author }) => {
	return (
		<div className="quote-author">
			<span className="author">{author}</span>
		</div>
	);
};

export default QuoteAuthor;

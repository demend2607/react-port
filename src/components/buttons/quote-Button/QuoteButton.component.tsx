import { FC, ButtonHTMLAttributes } from 'react';

import './quoteButton.styles.scss';

export enum BUTTON_TYPE_CLASSES {
	default = 'new-quote',
	twitter = 'twitter-button',
}
type ButtonProps = {
	buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) =>
	({
		[BUTTON_TYPE_CLASSES.twitter]: 'twitter-button',
		[BUTTON_TYPE_CLASSES.default]: 'new-quote',
	}[buttonType]);

const QuoteButton: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
	const buttonClass =
		getButton(buttonType); /* BUTTON_TYPE_CLASSES[buttonType as keyof typeof BUTTON_TYPE_CLASSES] */
	return (
		<>
			<button className={`quote-button ${buttonClass}`} {...otherProps}>
				{children}
			</button>
		</>
	);
};

export default QuoteButton;

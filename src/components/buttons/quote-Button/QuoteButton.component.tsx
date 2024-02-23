import { FC, ButtonHTMLAttributes } from 'react';

import './quoteButton.styles.scss';

export enum BUTTON_TYPE_CLASSES {
	twitter = 'twitter-button',
	default = 'new-quote',
}
type ButtonProps = {
	buttonType?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonType: BUTTON_TYPE_CLASSES.default) =>
	({
		[BUTTON_TYPE_CLASSES.twitter]: 'twitter',
		[BUTTON_TYPE_CLASSES.default]: 'default',
	}[buttonType]);

const QuoteButton: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
	const buttonClass = BUTTON_TYPE_CLASSES[buttonType as keyof typeof BUTTON_TYPE_CLASSES];
	return (
		<>
			<button className={`quote-button ${buttonClass}`} {...otherProps}>
				{children}
			</button>
		</>
	);
};
export default QuoteButton;

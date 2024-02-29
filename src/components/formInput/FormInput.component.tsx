import { FC, InputHTMLAttributes } from 'react';

import './formInput.styles.scss';

type FormInputProps = {
	label: string;
	value: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
	return (
		<div className="countdown-form-input">
			<input className="countdown-input" {...otherProps} />
			{label && (
				<label className={`${otherProps.value.length ? 'shrink' : ''} countdown-label`}>{label}</label>
			)}
		</div>
	);
};
export default FormInput;

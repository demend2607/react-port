import './formInput.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
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

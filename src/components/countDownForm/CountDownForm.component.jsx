import CountdownButton from '../buttons/countdown-button/CountdownButton.component';
import './countDownForm.styles.scss';

const CountDownForm = ({ addTimer }) => {
	return (
		<>
			<form className="countdown-form">
				<input type="text" className="title" id="title" name="title" placeholder=" " />
				<label htmlFor="title">Timer Ttile</label>
				<input type="date" className="date-picker" min="2024-01-30" />
				<CountdownButton type="submit" onClick={addTimer}>
					Submit
				</CountdownButton>
			</form>
		</>
	);
};
export default CountDownForm;

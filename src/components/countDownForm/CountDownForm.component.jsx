import CountdownButton from '../buttons/countdown-button/CountdownButton.component';
import './countDownForm.styles.scss';

const CountDownForm = () => {
	return (
		<>
			<form className="countdown-form">
				<label htmlFor="title">Ttile</label>
				<input type="text" className="date-picker" placeholder="What are you counting down to?" />
				<label htmlFor="date-picker">Select a Date</label>
				<input type="date" className="date-picker" min="2024-01-30" />
				<CountdownButton type="submit">Submit</CountdownButton>
			</form>
		</>
	);
};
export default CountDownForm;

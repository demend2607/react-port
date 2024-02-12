import { useState, useEffect } from 'react';
import { useCountdown } from '../../hooks/useCountdown.component';

import CountdownButton from '../../components/buttons/countdown-button/CountdownButton.component';

import './countdown.styles.scss';
import FormInput from '../../components/formInput/FormInput.component';

const CountDown = () => {
	const [targetDate, setTargetDate] = useState('');
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	const [title, setTitle] = useState('');
	const minPosDate = new Date().toISOString().split('T')[0];

	const handleResetCountdown = () => {
		setTitle('');
		setTargetDate('');
	};
	return (
		<div className="countdown-container">
			<h1>Countdown Timer</h1>
			<form className="countdown-form">
				<FormInput
					type="text"
					placeholder=" "
					onChange={(e) => setTitle(e.target.value)}
					label="Set Timer Title"
					value={title}
					htmlFor="title"
				/>
				<FormInput type="date" min={minPosDate} onChange={(e) => setTargetDate(e.target.value)} />
				<div className="button-countdown">
					<CountdownButton type="submit" onClick={handleResetCountdown} disabled={!targetDate}>
						Reset timer
					</CountdownButton>
				</div>
			</form>
			<div className="timer-container">
				<h3 className="timer-title">{targetDate ? title : 'Set Countdown Date'}</h3>
				<div className="countdown-values">
					<div className="countdown-value">
						<p className="value">{targetDate ? days : '0'}</p>
						<span>days</span>
					</div>
					<div className="countdown-value">
						<p className="value">{targetDate ? hours : '0'}</p>
						<span>hours</span>
					</div>
					<div className="countdown-value">
						<p className="value">{targetDate ? minutes : '0'}</p>
						<span>minutes</span>
					</div>
					<div className="countdown-value">
						<p className="value">{targetDate ? seconds : '0'}</p>
						<span>seconds</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountDown;

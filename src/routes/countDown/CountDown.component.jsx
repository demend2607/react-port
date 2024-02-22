import { useEffect, useState } from 'react';
import { useCountdown } from '../../hooks/useCountdown.component';
import { toast } from 'react-hot-toast';

import CountdownButton from '../../components/buttons/countdown-button/CountdownButton.component';

import './countdown.styles.scss';
import FormInput from '../../components/formInput/FormInput.component';

const CountDown = () => {
	const [targetDate, setTargetDate] = useState('');
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	const [title, setTitle] = useState('');
	const [countdown, setCountdown] = useState({ title: '', date: '' });

	const minPosDate = new Date().toISOString().split('T')[0];

	useEffect(() => {
		setCountdown(JSON.parse(localStorage.getItem('countdown')));
		setTargetDate(countdown.date);
		console.log(countdown, 'local', localStorage['countdown']);
	}, [countdown.date]);

	const handleDate = (e) => {
		e.preventDefault();

		setTargetDate(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (countdown.date == targetDate) return toast.error('Set valid data');
		else if (targetDate !== countdown.date) {
			setCountdown(() => {
				localStorage.removeItem('countdown');
				const data = { title: title, date: targetDate };
				localStorage.setItem('countdown', JSON.stringify(data));
				toast.success('Task Created');
				return data;
			});
		} else {
			setCountdown(() => {
				const data = { title: title, date: targetDate };
				localStorage.setItem('countdown', JSON.stringify(data));
				toast.success('Task Created');
				return data;
			});
		}
		toast.success('Task Created');

		setTitle('');
	};
	const handleResetCountdown = (e) => {
		e.preventDefault();
		setCountdown(() => {
			const data = { title: '', date: '' };
			localStorage.setItem('countdown', JSON.stringify(data));
			return data;
		});
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
				<FormInput value={targetDate} type="date" min={minPosDate} onChange={handleDate} />
				<div className="button-countdown">
					<CountdownButton type="submit" onClick={handleSubmit}>
						Start Countdown
					</CountdownButton>
					<CountdownButton type="reset" onClick={handleResetCountdown} disabled={!targetDate}>
						Reset timer
					</CountdownButton>
				</div>
			</form>

			{days && hours && minutes && seconds < 0 ? (
				<div className="timer-container">Countdown is End</div>
			) : (
				<div className="timer-container">
					<h3 className="timer-title">{countdown.title ? countdown.title : 'Set Countdown Date'}</h3>
					<div className="countdown-values">
						<div className="countdown-value">
							<p className="value">{countdown.date && countdown.title ? days : '0'}</p>
							<span>days</span>
						</div>
						<div className="countdown-value">
							<p className="value">{countdown.date && countdown.title ? hours : '0'}</p>
							<span>hours</span>
						</div>
						<div className="countdown-value">
							<p className="value">{countdown.date && countdown.title ? minutes : '0'}</p>
							<span>minutes</span>
						</div>
						<div className="countdown-value">
							<p className="value">{countdown.date && countdown.title ? seconds : '0'}</p>
							<span>seconds</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountDown;

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from './routes/navigation/Navigation.component';
import Home from './routes/home/Home.component';
import QuoteGenerate from './routes/quote-generate/QuoteGenerate.component';
import InfiniteScroll from './routes/infinite-scroll/InfiniteScroll.component';
import Countdown from './routes/countdown/Countdown.component';
import TodoDnd from './routes/todo/TodoDnd.component';

import './App.scss';
import { selectThemeValue } from './store/theme/theme.selector';

function App() {
	const themeValue = useSelector(selectThemeValue);

	return (
		<div className="App" id={themeValue}>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="quote" element={<QuoteGenerate />} />
					<Route path="scroll" element={<InfiniteScroll />} />
					<Route path="countdown" element={<Countdown />} />
					<Route path="todo" element={<TodoDnd />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

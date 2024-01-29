import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation.component';
import Home from './routes/home/Home.component';
import QuoteGenerate from './routes/quote-generate/QuoteGenerate.component';
import InfiniteScroll from './routes/infinite-scroll/InfiniteScroll.component';
import CountDown from './routes/countDown/CountDown.component';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="quote" element={<QuoteGenerate />} />
					<Route path="scroll" element={<InfiniteScroll />} />
					<Route path="countdown" element={<CountDown />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

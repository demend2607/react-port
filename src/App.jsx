import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation.component';
import Home from './routes/home/Home.component';
import QuoteGenerate from './routes/quote-generate/QuoteGenerate.component';
import InfiniteScroll from './routes/infinite-scroll/InfiniteScroll.component';
import Countdown from './routes/countdown/Countdown.component';
import TodoList from './routes/todo/TodoList.component';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="quote" element={<QuoteGenerate />} />
					<Route path="scroll" element={<InfiniteScroll />} />
					<Route path="countdown" element={<Countdown />} />
					<Route path="todo" element={<TodoList />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

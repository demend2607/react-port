import { useState, useEffect } from 'react';

import { CreateTodoProps, Todos } from '../../../routes/todo/TodoDnd.component.js';
import TodoList from '../todoList/TodoList.component';

import './dndColumn.styles.scss';

const DndColumn = ({ todos, setTodos }: CreateTodoProps) => {
	const [todoList, setTodoList] = useState<Todos[]>([]);
	const [inProgress, setInProgress] = useState<Todos[]>([]);
	const [completed, setCompleted] = useState<Todos[]>([]);

	useEffect(() => {
		const fTodos = todos.filter((todo) => todo.status === 'todo');
		const fInProgress = todos.filter((todo) => todo.status === 'inprogress');
		const fCompleted = todos.filter((todo) => todo.status === 'completed');

		setTodoList(fTodos);
		setInProgress(fInProgress);
		setCompleted(fCompleted);
	}, [todos]);

	const statuses = ['todo', 'inprogress', 'completed'];

	return (
		<div className="dnd-container">
			{statuses.map((status, index) => (
				<TodoList
					key={index}
					status={status}
					todos={todos}
					setTodos={setTodos}
					statusList={[todoList, inProgress, completed]}
				/>
			))}
		</div>
	);
};

export default DndColumn;

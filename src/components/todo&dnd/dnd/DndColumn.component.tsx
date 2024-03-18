import { useState, useEffect } from 'react';

import { CreateTodoProps } from '../createTodo/CreateTodo.component';
import { TodosState } from '../../../store/todo/todo.slice';
import TodoList from '../todoList/TodoList.component';

import './dndColumn.styles.scss';

const DndColumn = ({ todos, setTodos }: CreateTodoProps) => {
	const [todoList, setTodoList] = useState<TodosState[]>([]);
	const [inProgress, setInProgress] = useState<TodosState[]>([]);
	const [completed, setCompleted] = useState<TodosState[]>([]);

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

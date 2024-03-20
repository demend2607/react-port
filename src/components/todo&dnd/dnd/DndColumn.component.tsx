import { useState, useEffect } from 'react';

import { TodosState, TodoState } from '../../../store/todo/todo.slice';
import TodoList from '../todoList/TodoList.component';

import './dndColumn.styles.scss';
import { CreateTodoProps } from '../../../routes/todo/TodoDnd.component';
import { useSelector } from 'react-redux';
import { selectTodoItems } from '../../../store/todo/todo.selector';

const DndColumn = () => {
	const [todoList, setTodoList] = useState<TodoState[]>([]);
	const [inProgress, setInProgress] = useState<TodoState[]>([]);
	const [completed, setCompleted] = useState<TodoState[]>([]);
	const todos = useSelector(selectTodoItems);
	// console.log(todos);

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
				<TodoList key={index} status={status} todos={todos} statusList={[todoList, inProgress, completed]} />
			))}
		</div>
	);
};

export default DndColumn;

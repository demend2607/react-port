import './todoList.styles.scss';

import TodoItem from './../todoItem/TodoItem.component';

const TodoList = ({ todos, setTodos, status, statusList }) => {
	const [todosList, inProgress, completed] = statusList;
	let todosToMap = todosList;
	let text = 'Todo';
	let bg = { backgroundColor: '#35f064' };

	if (status === 'inprogress') {
		text = 'In Progress';
		bg = { backgroundColor: '#a449fae4' };
		todosToMap = inProgress;
	}
	if (status === 'completed') {
		text = 'Completed';
		bg = { backgroundColor: '#ff7028be' };
		todosToMap = completed;
	}

	return (
		<div className="dnd-card">
			<div className="title" style={bg}>
				<span>{text}</span>
			</div>
			{todosToMap.length > 0 &&
				todosToMap.map((todo) => (
					<TodoItem key={todo.id} status={status} todo={todo} todos={todos} setTodos={setTodos} />
				))}
		</div>
	);
};

export default TodoList;

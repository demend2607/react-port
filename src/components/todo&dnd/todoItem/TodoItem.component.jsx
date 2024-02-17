import { toast } from 'react-hot-toast';

import { ReactComponent as DeleteIcon } from '../../../assets/delete-icon.svg';

import './todoItem.styles.scss';
const TodoItem = ({ todos, setTodos, todo }) => {
	const handleDeleteTodos = (id) => {
		const rTodos = todos.filter((t) => t.id !== id);
		setTodos(rTodos);
		localStorage.setItem('todos', JSON.stringify(rTodos));

		toast('Todo removed');
	};

	return (
		<div>
			<li className="todo_list-item">
				<p>{todo.name}</p>
				<DeleteIcon className="delete-btn" onClick={() => handleDeleteTodos(todo.id)} />
			</li>
		</div>
	);
};
export default TodoItem;

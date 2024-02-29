import { toast } from 'react-hot-toast';

import { ReactComponent as DeleteIcon } from '../../../assets/delete-icon.svg';

import './todoItem.styles.scss';
import { useDrag } from 'react-dnd';
import { CreateTodoProps, Todos } from '../../../routes/todo/TodoDnd.component.js';

type TodoItemProps = CreateTodoProps & {
	todo: Todos;
};
const TodoItem = ({ todos, setTodos, todo }: TodoItemProps) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'todo',
		item: { id: todo.id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	console.log(isDragging);

	const handleDeleteTodos = (id: string) => {
		const rTodos = todos.filter((t) => t.id !== id);
		setTodos(rTodos);
		localStorage.setItem('todos', JSON.stringify(rTodos));

		toast('Todo removed', { icon: '🗑️' });
	};

	return (
		<li ref={drag} className={`todo_list-item ${isDragging ? 'drag-25' : 'drag-100'}`}>
			<p>{todo.name}</p>
			<DeleteIcon className="delete-btn" onClick={() => handleDeleteTodos(todo.id)} />
		</li>
	);
};
export default TodoItem;

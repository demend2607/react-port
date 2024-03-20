import { toast } from 'react-hot-toast';

import { ReactComponent as DeleteIcon } from '../../../assets/delete-icon.svg';

import './todoItem.styles.scss';
import { useDrag } from 'react-dnd';
import { TodoState, removeTodo } from '../../../store/todo/todo.slice';
import { useDispatch } from 'react-redux';
import { CreateTodoProps } from '../../../routes/todo/TodoDnd.component';

type TodoItemProps = CreateTodoProps & {
	todo: TodoState;
};
const TodoItem = ({ todo }: TodoItemProps) => {
	const dispatch = useDispatch();
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'todo',
		item: { id: todo.id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	console.log(isDragging);

	const handleDeleteTodos = (id: string) => {
		dispatch(removeTodo(id));

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

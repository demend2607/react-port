import { useDrop } from 'react-dnd';
import { toast } from 'react-hot-toast';

import { TodosState, TodoState, updateTodo } from '../../../store/todo/todo.slice';
import TodoItem from '../todoItem/TodoItem.component';

import './todoList.styles.scss';
import { CreateTodoProps } from '../../../routes/todo/TodoDnd.component';
import { useDispatch } from 'react-redux';

type TodoListProps = CreateTodoProps & {
	status: string;
	statusList: [TodoState[], TodoState[], TodoState[]];
};

const TodoList = ({ todos, status, statusList }: TodoListProps) => {
	const dispatch = useDispatch();
	const [todo, inProgress, completed] = statusList;
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'todo',
		drop: (item: TodoState) => {
			addItemToList(item.id);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	let todosToMap = todo;
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
	//+ Change status on drop todo
	const addItemToList = (id: string) => {
		dispatch(updateTodo({ id: id, name: '', status: status }));
		toast('Task status changed', { icon: '📓' });
	};

	return (
		<div ref={drop} className={`dnd-card ${isOver ? 'bg-200' : ''}`}>
			<div className="title" style={bg}>
				<span>{text}</span>
			</div>
			<div className="todo-item_body">
				{todosToMap.length > 0 &&
					todosToMap.map((todo, index) => <TodoItem key={todo.id} todo={todo}></TodoItem>)}
			</div>
		</div>
	);
};

export default TodoList;

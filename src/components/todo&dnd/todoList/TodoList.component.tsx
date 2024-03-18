import { useDrop } from 'react-dnd';
import { toast } from 'react-hot-toast';

import { CreateTodoProps } from '../createTodo/CreateTodo.component';
import { TodosState } from '../../../store/todo/todo.slice';
import TodoItem from '../todoItem/TodoItem.component';

import './todoList.styles.scss';

type TodoListProps = CreateTodoProps & {
	status: string;
	statusList: [TodosState[], TodosState[], TodosState[]];
};

const TodoList = ({ todos, setTodos, status, statusList }: TodoListProps) => {
	const [todosList, inProgress, completed] = statusList;
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'todo',
		drop: (item: TodosState) => {
			addItemToList(item.id);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

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
	//+ Change status on drop todo
	const addItemToList = (id: string) => {
		setTodos((prev): TodosState[] => {
			const mTodos = prev.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						status: status,
					};
				}
				return todo;
			});
			localStorage.setItem('todos', JSON.stringify(mTodos));
			toast('Task status changed', { icon: '📓' });
			return mTodos;
		});
	};

	return (
		<div ref={drop} className={`dnd-card ${isOver ? 'bg-200' : ''}`}>
			<div className="title" style={bg}>
				<span>{text}</span>
			</div>
			<div className="todo-item_body">
				{todosToMap.length > 0 &&
					todosToMap.map((todo, index) => (
						<TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></TodoItem>
					))}
			</div>
		</div>
	);
};

export default TodoList;

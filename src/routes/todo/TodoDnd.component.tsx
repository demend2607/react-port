import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DndColumn from '../../components/todo&dnd/dnd/DndColumn.component';
import CreateTodo from '../../components/todo&dnd/createTodo/CreateTodo.component';
import { TodosState } from '../../store/todo/todo.slice';

import './todoDnd.styles.scss';

const TodoList = () => {
	const [todos, setTodos] = useState<TodosState[]>([]);
	//+ Get item from local storage ' '
	return (
		<DndProvider backend={HTML5Backend}>
			<Toaster />
			<div className="todo_lsit-container">
				<h1>Todo List</h1>
				<CreateTodo todos={todos} setTodos={setTodos} />
				<DndColumn todos={todos} setTodos={setTodos} />
			</div>
		</DndProvider>
	);
};

export default TodoList;

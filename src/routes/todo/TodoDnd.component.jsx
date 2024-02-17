import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import 

import DndColumn from '../../components/todo&dnd/dnd/DndColumn.component';
import CreateTodo from '../../components/todo&dnd/createTodo/CreateTodo.component';

import './todoDnd.styles.scss';
const TodoList = () => {
	const [todos, setTodos] = useState([]);
	//+ Get item from local storage

	return (
		<>
			<Toaster />
			<div className="todo_lsit-container">
				<h1>Todo List</h1>
				<CreateTodo todos={todos} setTodos={setTodos} />
				<DndColumn todos={todos} setTodos={setTodos} />
			</div>
		</>
	);
};

export default TodoList;

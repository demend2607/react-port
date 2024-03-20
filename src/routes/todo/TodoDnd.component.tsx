import { SetStateAction, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DndColumn from '../../components/todo&dnd/dnd/DndColumn.component';
import CreateTodo from '../../components/todo&dnd/createTodo/CreateTodo.component';
import { TodosState, TodoState } from '../../store/todo/todo.slice';

import './todoDnd.styles.scss';
import { Dispatch } from 'redux';

export type CreateTodoProps = {
	todos: TodoState[];
};

const TodoList = () => {
	//+ Get item from local storage ' '
	return (
		<DndProvider backend={HTML5Backend}>
			<Toaster />
			<div className="todo_lsit-container">
				<h1>Todo List</h1>
				<CreateTodo />
				<DndColumn />
			</div>
		</DndProvider>
	);
};

export default TodoList;

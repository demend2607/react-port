import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import FormInput from '../../components/formInput/FormInput.component';
import './todoList.styles.scss';

const TodoList = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);

	const handleGetValue = (e) => {
		setInputValue(e.target.value);
	};

	const handleCreateTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, inputValue]);
		setInputValue('');
	};

	const handleDeleteTodo = (index) => {
		setTodos((exitingItems) => exitingItems.filter((item, i) => index !== i));
	};

	//+ dnd piece
	const onDragEnd = (result) => {
		console.log(result);
	};
	return (
		<div className="todo_lsit-container">
			<h1>Todo List</h1>
			<form className="todo_list-form">
				<FormInput
					type="text"
					placeholder=" "
					htmlFor="title"
					label="Write todo"
					value={inputValue}
					onChange={handleGetValue}
				/>
				<button className="todo_list-btn" onClick={handleCreateTodo}>
					Add todo
				</button>
			</form>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="drop-container">
					<div className="drop-card">
						<div className="title-block">
							<span>In Progress</span>
						</div>
						{todos.map((todo, index) => (
							<li key={index} className="todo_list-item">
								<p>{todo}</p>
								<DeleteIcon className="delete-btn" onClick={() => handleDeleteTodo(index)} />
							</li>
						))}
					</div>
					<div className="drop-card">
						<div className="title-block">
							<span>Complete</span>
						</div>
					</div>
					<div className="drop-card">
						<div className="title-block ">
							<span>Finish</span>
						</div>
					</div>
				</div>
			</DragDropContext>
		</div>
	);
};
export default TodoList;

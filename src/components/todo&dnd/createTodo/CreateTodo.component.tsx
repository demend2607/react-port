import { useState, useEffect, Dispatch, FormEvent, SetStateAction } from 'react';
import { v4 } from 'uuid';
import { toast } from 'react-hot-toast';

import FormInput from '../../formInput/FormInput.component';
import { TodosState } from '../../../store/todo/todo.slice';

import './createTodo.styles.scss';

export type CreateTodoProps = {
	todos: TodosState[];
	setTodos: Dispatch<SetStateAction<TodosState[]>>;
};

const CreateTodo = ({ todos, setTodos }: CreateTodoProps) => {
	const [todo, setTodo] = useState<TodosState>({ id: '', name: '', status: 'todo' });

	useEffect(() => {
		if (!localStorage['todos']) return;
		setTodos(JSON.parse(localStorage.getItem('todos') || '{}'));
	}, []);
	const handleCreateTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (todo.name.length < 3) return toast.error('A todo must have more than 3 characters');

		if (todo.name.length > 80) return toast.error('A todo must not be more than 80 characters');

		setTodos((prev: TodosState[]) => {
			const list = [...prev, todo];
			//+ Set item into local storage
			localStorage.setItem('todos', JSON.stringify(list) || '{}');
			return list;
		});

		toast.success('Task Created');
		setTodo({ id: '', name: '', status: 'todo' });
	};
	return (
		<form className="todo_list-form" onSubmit={handleCreateTodo}>
			<FormInput
				type="text"
				placeholder=" "
				label="Write todo"
				value={todo.name}
				onChange={(e) => setTodo({ ...todo, id: v4(), name: e.target.value, status: 'todo' })}
			/>
			<button type="submit" className="todo_list-btn">
				Add todo
			</button>
		</form>
	);
};
export default CreateTodo;

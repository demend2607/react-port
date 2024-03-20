import { useState, FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { addTodo } from '../../../store/todo/todo.slice';

import FormInput from '../../formInput/FormInput.component';
import './createTodo.styles.scss';

const CreateTodo = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState<string>('');

	useEffect(() => {
		const savedTodos = localStorage.getItem('todos');
		if (savedTodos) {
			const parsedTodos = JSON.parse(savedTodos);
			dispatch(addTodo(parsedTodos));
		}
		return;
	}, []);

	const handleCreateTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (name.length < 3) return toast.error('A todo must have more than 3 characters');
		if (name.length > 80) return toast.error('A todo must not be more than 80 characters');

		dispatch(addTodo({ id: '', name: name, status: '' }));

		toast.success('Task Created');
		setName('');
	};
	return (
		<form className="todo_list-form" onSubmit={handleCreateTodo}>
			<FormInput
				type="text"
				placeholder=" "
				label="Write todo"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button type="submit" className="todo_list-btn">
				Add todo
			</button>
		</form>
	);
};
export default CreateTodo;

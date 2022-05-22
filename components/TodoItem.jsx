import React, { useState } from 'react';
import {
	View,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Switch,
	Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete, removeTodo, editTodo } from '../redux/slice/todo';

import { contentStyle } from '../styles/contentStyle';
import { btnStyles } from '../styles/elementStyle';
import { todoCardStyle } from '../styles/todoCardStyle';

function TodoItem({ todo }) {
	const [edit, setEdit] = useState(false);
	const [title, setTitle] = useState(todo.title);

	const dispatch = useDispatch();

	function handleEdit() {
		dispatch(editTodo({ id: todo.id, title }));
		setEdit(false);
	}

	function handleCanselEdit() {
		setTitle(todo.title);
		setEdit(false);
	}

	return (
		<View style={todoCardStyle.card}>
			<TextInput
				editable={edit}
				style={[
					todoCardStyle.title,
					{
						backgroundColor: edit ? 'white' : 'transparent',
					},
				]}
				onChangeText={setTitle}
				value={title}
			/>
			<View style={todoCardStyle.actionsSection}>
				<Switch
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={todo.completed ? '#f5dd4b' : '#f4f3f4'}
					ios_backgroundColor="#3e3e3e"
					onValueChange={() => dispatch(toggleComplete(todo.id))}
					value={todo.completed}
				/>

				{edit ? (
					<>
						<TouchableOpacity
							onPress={handleEdit}
							style={[btnStyles.btn, contentStyle.Success]}
						>
							<Image
								style={todoCardStyle.icon}
								source={require('../assets/icons8-done-128.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={handleCanselEdit}
							style={[btnStyles.btn, contentStyle.Danger]}
						>
							<Image
								style={todoCardStyle.icon}
								source={require('../assets/icons8-close-90.png')}
							/>
						</TouchableOpacity>
					</>
				) : (
					<>
						<TouchableOpacity
							onPress={() => setEdit(true)}
							style={[btnStyles.btn, contentStyle.Warning]}
						>
							<Image
								style={todoCardStyle.icon}
								source={require('../assets/icons8-edit-150.png')}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => dispatch(removeTodo(todo.id))}
							style={[btnStyles.btn, contentStyle.Danger]}
						>
							<Image
								style={todoCardStyle.icon}
								source={require('../assets/icons8-delete-96.png')}
							/>
						</TouchableOpacity>
					</>
				)}
			</View>
		</View>
	);
}

export default TodoItem;

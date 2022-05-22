import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
} from 'react-native';

import { btnStyles } from '../styles/elementStyle';
import { contentStyle } from '../styles/contentStyle';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todo';

function NewTodo() {
	const [todoTitle, setTodoTitle] = useState('');
	const dispatch = useDispatch();

	function generateTodo() {
		if (todoTitle === '') {
			return Alert.alert('Alert', 'plese write a Todo');
		}
		const todo = {
			id: Date.now().toString(),
			title: todoTitle,
			completed: false,
		};
		dispatch(addTodo(todo));
		setTodoTitle('');
	}

	return (
		<View style={styles.view}>
			<Text style={styles.text}>Add a Todo list here</Text>
			<View style={styles.element}>
				<TextInput
					style={styles.input}
					value={todoTitle}
					onChangeText={setTodoTitle}
					placeholder="Write something!"
					placeholderTextColor="#B2C8E6"
				/>
				<TouchableOpacity
					onPress={generateTodo}
					style={[btnStyles.btn, contentStyle.Dark]}
				>
					<Text style={[btnStyles.btn, { color: 'white' }]}>
						Add To List
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default NewTodo;

const styles = StyleSheet.create({
	view: {
		textAlign: 'center',
		paddingVertical: 50,
		backgroundColor: '#C2D3EB',
	},
	text: {
		fontSize: 24,
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
	},

	element: {
		marginTop: 40,
		flex: -1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	input: {
		padding: 5,
		backgroundColor: '#fff',
		padding: 4,
		borderWidth: 4,
		borderRadius: 8,
		borderColor: '#B2C8E6',
		marginHorizontal: 10,
		flexGrow: 15,
	},
});

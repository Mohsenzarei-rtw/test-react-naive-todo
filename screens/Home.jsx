import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import NewTodo from '../components/NewToDo';
import TodoItem from '../components/TodoItem';

function Home() {
	const todos = useSelector((state) => state.root.todo);
	const renderItem = (todo) => <TodoItem todo={todo.item} />;

	return (
		<View>
			<NewTodo />
			<FlatList
				data={todos}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

export default Home;

import { StyleSheet } from 'react-native';

export const elementStyle = StyleSheet.create({
	input: {
		padding: 5,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.25,
		shadowRadius: 7,
		elevation: 8,
	},
});

export const btnStyles = StyleSheet.create({
	btn: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		margin: 3,
		borderRadius: 5,
	},
});

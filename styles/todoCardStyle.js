import { StyleSheet } from 'react-native';

export const todoCardStyle = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: 'row',
		margin: 5,
		padding: 5,
		backgroundColor: '#edede9',
	},
	icon: {
		width: 16,
		height: 16,
	},
	title: {
		fontSize: 18,
		width: '50%',
		marginRight: 10,
		paddingHorizontal: 5,
		borderRadius: 5,
	},
	actionsSection: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '30%',
	},
});

import { StyleSheet } from 'react-native';

export const contentStyle = StyleSheet.create({
	content: {
		width: '100%',
		height: '100',
		color: '#f5f5f5',
	},
	row: {
		flex: 1,
		flexDirection: 'row',
	},
	center: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	white: {
		color: 'white',
	},
	Primary: { backgroundColor: '#0d6efd' },
	Secondary: { backgroundColor: '#6c757d' },
	Success: { backgroundColor: '#198754' },
	Danger: { backgroundColor: '#dc3545' },
	Warning: { backgroundColor: '#ffc107' },
	Info: { backgroundColor: '#0dcaf0' },
	Light: { backgroundColor: '#f9fafb' },
	Dark: { backgroundColor: '#212529' },
});

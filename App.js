import { store } from './redux/store';
import { Provider } from 'react-redux';

//screens
import Home from './screens/Home';

export default function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

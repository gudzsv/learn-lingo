import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store.js';
import App from '../App.jsx';
import { app } from '../firebase/firebase.js';
import { initializeAuthListener } from '../redux/auth/operations.js';
import { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

store.dispatch(initializeAuthListener());

const Providers = () => {
	useEffect(() => {
		store.dispatch(initializeAuthListener());
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<HelmetProvider>
						<App />
					</HelmetProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default Providers;

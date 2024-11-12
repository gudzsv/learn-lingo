import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App.jsx';

const Providers = () => (
	// <Provider store={store}>
	// 	<PersistGate loading={null} persistor={persistor}>
	<BrowserRouter>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</BrowserRouter>
	// 	</PersistGate>
	// </Provider>;
);

export default Providers;

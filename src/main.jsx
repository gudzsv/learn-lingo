import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/main.scss';
import Providers from './providers/Providers.jsx';

const environment = import.meta.env.VITE_APP_ENV;

if (environment === 'development1') {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<Providers />
		</StrictMode>
	);
} else {
	createRoot(document.getElementById('root')).render(<Providers />);
}

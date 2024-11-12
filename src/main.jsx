import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from './providers/Providers.jsx';
import './index.css';

const environment = import.meta.env.VITE_APP_ENV;

if (environment === 'development') {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<Providers />
		</StrictMode>
	);
} else {
	createRoot(document.getElementById('root')).render(<Providers />);
}

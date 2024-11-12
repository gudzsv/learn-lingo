import { Outlet } from 'react-router';
import Header from '../Header/Header.jsx';

const SharedLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default SharedLayout;

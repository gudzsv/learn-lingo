import { Outlet } from 'react-router';
import Header from '../../Header/Header.jsx';

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;

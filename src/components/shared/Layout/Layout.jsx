import { Outlet } from 'react-router';
import Header from '../../Header/Header.jsx';
import Container from '../../Container/Container.jsx';

const Layout = () => {
	return (
		<Container>
			<Header />
			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default Layout;

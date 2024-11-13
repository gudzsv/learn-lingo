import { Outlet } from 'react-router';
import Header from '../Header/Header.jsx';
import Container from '../container/Container.jsx';

const SharedLayout = () => {
	return (
		<Container>
			<Header />
			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default SharedLayout;

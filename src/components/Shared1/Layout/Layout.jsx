import { Outlet } from 'react-router';
import Header from '../../Header/Header.jsx';
// import Container from '../Container/Container.jsx';
// import styles from './Layout.module.scss';

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

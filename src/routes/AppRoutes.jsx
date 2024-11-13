import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Loader from '../components/Loader/Loader.jsx';
import SharedLayout from '../components/SharedLayout/SharedLayout.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Loader from '../components/Shared/Loader/Loader.jsx';
import Layout from '../components/Shared/Layout/Layout.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
	import('../pages/TeachersPage/TeachersPage.jsx')
);
const FavoritesPage = lazy(() =>
	import('../pages/FavoritesPage/FavoritesPage.jsx')
);

const AppRoutes = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='teachers' element={<TeachersPage />} />
					<Route element={<PrivateRoute />}>
						<Route path='favorites' element={<FavoritesPage />} />
					</Route>
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;

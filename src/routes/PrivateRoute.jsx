import React from 'react';
import ErrorMessage from '../components/Shared/ErrorMessage/ErrorMessage.jsx';
import Loader from '../components/Shared/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import {
	selectError,
	selectIsAuthenticated,
	selectIsLoading,
} from '../redux/auth/selectors.js';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
	const isLoading = useSelector(selectIsLoading);
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const authError = useSelector(selectError);

	if (isLoading) {
		return <Loader />;
	}

	if (authError) {
		return <ErrorMessage message={authError} />;
	}

	if (!isAuthenticated) {
		return <Navigate to='/' replace />;
	}

	return <Outlet />;
};

export default PrivateRoute;

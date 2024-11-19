import React from 'react';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/shared/ErrorMessage/ErrorMessage.jsx';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import {
	selectError,
	selectIsAuthenticated,
	selectIsLoading,
} from '../redux/auth/selectors.js';

const RestrictedRoute = () => {
	const isLoading = useSelector(selectIsLoading);
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const authError = useSelector(selectError);

	if (isLoading) {
		return <Loader />;
	}

	if (authError) {
		return <ErrorMessage message={authError} />;
	}

	if (isAuthenticated) {
		return <Navigate to='/teachers' replace />;
	}

	return <Outlet />;
};

export default RestrictedRoute;

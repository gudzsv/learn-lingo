import * as Yup from 'yup';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const signUpValidationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Name should be at least 2 characters')
		.required('Name is required'),
	email: Yup.string()
		.matches(EMAIL_REGEX, {
			message: 'Invalid email format',
			excludeEmptyString: true,
		})
		.required('Email is required'),
	password: Yup.string()
		.min(6, 'Password should be at least 6 characters')
		.required('Password is required'),
});

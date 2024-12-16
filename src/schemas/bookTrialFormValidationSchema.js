import * as Yup from 'yup';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const bookTrialFormValidationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Name should be at least 2 characters')
		.required('Full Name is required'),
	email: Yup.string()
		.matches(EMAIL_REGEX, {
			message: 'Invalid email format',
			excludeEmptyString: true,
		})
		.required('Email is required'),
	phone: Yup.string()
		.required('Phone number is required')
		.matches(/^[0-9]+$/, 'Phone number must only contain digits'),
	reason: Yup.string().required('Please select a reason '),
});

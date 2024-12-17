export const DROPDOWNS = [
	{
		id: 'languages',
		label: 'Languages',
		items: [
			'French',
			'English',
			'German',
			'Spanish',
			'Ukrainian',
			'Polish',
			'Korean',
		],
	},
	{
		id: 'levels',
		label: 'Level of knowledge',
		items: [
			'A1 Beginner',
			'A2 Elementary',
			'B1 Intermediate',
			'B2 Upper-Intermediate',
			'C1 Advanced',
			'C2 Proficient',
		],
	},
	{ id: 'price_per_hour', label: 'Price', items: ['10', '20', '30', '40'] },
];

export const INITIAL_FILTER = {
	languages: 'English',
	levels: 'A1 Beginner',
	price_per_hour: '40',
};

export const REASONS = [
	{ id: 'career', value: 'career_and_business', label: 'Career and business' },
	{ id: 'lesson', value: 'lesson_for_kids', label: 'Lesson for kids' },
	{ id: 'living', value: 'living_abroad', label: 'Living abroad' },
	{ id: 'exams', value: 'exams_and_coursework', label: 'Exams and coursework' },
	{
		id: 'culture',
		value: 'culture_travel_or_hobby',
		label: 'Culture, travel or hobby',
	},
];

export const MODAL_CONFIG = {
	login: {
		title: 'Log In',
		message:
			'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.',
	},
	registration: {
		title: 'Registration',
		message:
			'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information',
	},
	bookLesson: {
		title: 'Book trial lesson',
		message:
			'Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.',
	},
	favoriteInfo: {
		title: 'Information',
		message:
			'To add or remove a card from your favorites, please log in to your account. Thank you!',
	},
};

export const INITIAL_VISIBLE_CARDS = 4;

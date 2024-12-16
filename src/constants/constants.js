export const DROPDOWNS = [
	{
		id: 'languages',
		label: 'Languages',
		items: ['French', 'English', 'German', 'Ukrainian', 'Polish'],
	},
	{
		id: 'levels',
		label: 'Level of knowledge',
		items: [
			'A1 Beginner',
			'A2 Elementary',
			'B1 Intermediate',
			'B2 Upper-Intermediate',
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

export const INITIAL_VISIBLE_CARDS = 4;

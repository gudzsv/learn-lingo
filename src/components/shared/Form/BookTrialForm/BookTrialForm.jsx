import styles from './BookTrialForm.module.scss';
import Avatar from '../../Avatar/Avatar.jsx';
import Button from '../../Button/Button.jsx';

const BookTrialForm = (teacher) => {
	return (
		<div>
			<div>
				<Avatar src={teacher} alt={teacher} />
				<p>
					<span>{teacher}</span>
					<span>{teacher}</span>
				</p>
			</div>

			<form>
				<fieldset className='{styles.radioReasonGroup}'>
					<legend className=''>
						What is your main reason for learning English?
					</legend>

					<div>
						<input
							type='radio'
							id='career'
							name='reason'
							value='career_and_business'
							aria-label='Career and business'
							required
						/>
						<label for='career'>Career and business</label>
					</div>

					<div>
						<input
							type='radio'
							id='lesson'
							name='reason'
							value='lesson_for_kids'
							aria-describedby='Lesson for kids'
						/>
						<label for='lesson'>Lesson for kids</label>
					</div>

					<div>
						<input
							type='radio'
							id='living'
							name='reason'
							value='living_abroad'
							aria-describedby='Living abroad'
						/>
						<label for='living'>Living abroad</label>
					</div>

					<div>
						<input
							type='radio'
							id='exams'
							name='reason'
							value='exams_and_coursework'
							aria-describedby='Exams and coursework'
						/>
						<label for='exams'>Exams and coursework</label>
					</div>

					<div>
						<input
							type='radio'
							id='culture'
							name='reason'
							value='culture_travel _or_hobby'
							aria-describedby='Culture, travel or hobby'
						/>
						<label for='culture'>Culture, travel or hobby</label>
					</div>
				</fieldset>
				<div>
					<input type='text' placeholder='Full Name' />
					<input type='text' placeholder='Email' />
					<input type='text' placeholder='Phone number' />
				</div>

				<Button text='Book' />
			</form>
		</div>
	);
};

export default BookTrialForm;

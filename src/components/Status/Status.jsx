import StatusItem from './StatusItem/StatusItem.jsx';
import styles from './Status.module.scss';
import { useEffect, useState } from 'react';

const Status = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.matchMedia('(max-width: 767px)').matches);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section>
			<ul className={styles.statusList}>
				<StatusItem title={'32,000 +'} text={'Experienced tutors'} />
				<StatusItem title={'300,000 +'} text={'5-star tutor reviews'} />
				<StatusItem
					title={'120 +'}
					text={'Subjects taught'}
					className={isMobile ? 'hideEl' : null}
				/>
				<StatusItem
					title={'200 +'}
					text={'Tutor nationalities'}
					className={isMobile ? 'hideEl' : null}
				/>
			</ul>
		</section>
	);
};

export default Status;

import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero.jsx';
import Container from '../../components/Shared/Container/Container.jsx';
import Status from '../../components/Status/Status.jsx';

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>{'Learn Lingo'}</title>
			</Helmet>
			<Container>
				<Hero />
				<Status />
			</Container>
		</>
	);
};

export default HomePage;

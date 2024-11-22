import Hero from '../../components/Hero/Hero.jsx';
import Container from '../../components/Shared/Container/Container.jsx';
import Status from '../../components/Status/Status.jsx';

const HomePage = () => {
	return (
		<Container>
			<Hero />
			<Status />
		</Container>
	);
};

export default HomePage;

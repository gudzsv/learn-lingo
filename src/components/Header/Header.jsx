import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';

const Header = () => {
	return (
		<header>
			<nav>
				<Link to='/'>
					<Icon iconName='logo' width={28} height={28} />
					<span>LearnLingo</span>
				</Link>
			</nav>
			<div>
				<button type='button'>Log in</button>
				<button type='button'>Registration</button>
			</div>
		</header>
	);
};

export default Header;

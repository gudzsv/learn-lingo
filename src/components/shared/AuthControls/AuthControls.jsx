import AuthBtn from '../Button/AuthBtn/AuthBtn.jsx';
import styles from './AuthControls.module.scss';

const AuthControls = ({ isAuthenticated, onLogOut, onOpenModal, isOpen }) => {
	return (
		<nav
			className={isOpen ? styles.openModal : styles.authContainer}
			aria-label='Authentication options'
		>
			{isAuthenticated ? (
				<AuthBtn
					onClick={onLogOut}
					label='Log Out'
					icon='log-out'
					style='logOutBtn'
					type='button'
				/>
			) : (
				['login', 'registration'].map((type) => (
					<AuthBtn
						key={type}
						onClick={() => onOpenModal(type)}
						label={type === 'login' ? 'Log In' : 'Registration'}
						icon={type === 'login' ? 'login' : null}
						style={type === 'login' ? 'logInBtn' : 'registrationBtn'}
						type='button'
					/>
				))
			)}
		</nav>
	);
};

export default AuthControls;

import { ModalRoot, ModalTemplate } from '../../Shared/Modal/index.js';
import { SignInForm, SignUpForm } from '../../Shared/Form/index.js';

const ModalManager = ({
	modalState,
	isLoading,
	isAuthenticated,
	onClose,
	onLogIn,
	onSignUp,
}) => {
	if (!modalState.isOpen) return null;

	return (
		<ModalRoot
			isOpen={modalState.isOpen}
			onClose={onClose}
			isSuccess={isAuthenticated}
		>
			<ModalTemplate
				title={modalState.type === 'login' ? 'Log In' : 'Registration'}
				message={
					modalState.type === 'login'
						? 'Welcome back! Please enter your credentials to access your account and continue your search for a teacher.'
						: 'Thank you for your interest in our platform! Please provide us with the following information to register.'
				}
				isLoading={isLoading}
			>
				{modalState.type === 'login' ? (
					<SignInForm onSubmit={onLogIn} />
				) : (
					<SignUpForm onSubmit={onSignUp} />
				)}
			</ModalTemplate>
		</ModalRoot>
	);
};

export default ModalManager;

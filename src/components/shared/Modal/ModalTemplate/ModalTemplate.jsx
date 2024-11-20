import React from 'react';
import styles from './ModalTemplate.module.scss';
import Button from '../../Button/Button.jsx';

const ModalTemplate = ({ title, message, children, onSubmit, isLoading }) => {
	return (
		<div
			className={styles.modal}
			role='dialog'
			aria-labelledby='modal-title'
			aria-describedby='modal-message'
		>
			<h2 className={styles.modalTitle}>{title}</h2>
			<p className={styles.modalText}>{message}</p>
			{children}
			{/* <div className={styles.modalBtn}>
				<Button
					form='signUpForm'
					type={'submit'}
					text='Sign Up'
					className={'modalBtn'}
					// onClick={onConfirm}
					isLoading={isLoading}
				/>
			</div> */}
		</div>
	);
};

export default ModalTemplate;

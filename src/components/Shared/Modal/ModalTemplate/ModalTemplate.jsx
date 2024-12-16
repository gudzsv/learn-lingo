import React from 'react';
import styles from './ModalTemplate.module.scss';

const ModalTemplate = ({ title, message, children }) => {
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
		</div>
	);
};

export default ModalTemplate;

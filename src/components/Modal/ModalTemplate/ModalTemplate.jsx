import React from 'react';
import styles from './ModalTemplate.module.scss';

const ModalTemplate = ({ title, message, onConfirm, onCancel }) => {
	return (
		<div className={styles.modal}>
			<h2>{title}</h2>
			<p>{message}</p>
			<div className={styles.buttons}>
				<button onClick={onConfirm} className={styles.confirmBtn}>
					Confirm
				</button>
				<button onClick={onCancel} className={styles.cancelBtn}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default ModalTemplate;

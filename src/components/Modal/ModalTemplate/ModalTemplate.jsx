import React from 'react';
import styles from './ModalTemplate.module.scss';
import Button from '../../Button/Button.jsx';
import Icon from '../../Icon/Icon.jsx';

const ModalTemplate = ({ title, message, onConfirm, onCancel, form = '' }) => {
	return (
		<div className={styles.modal}>
			<h2>{title}</h2>
			<p>{message}</p>
			{form}
			<div className={styles.buttons}>
				<Button type={'submit'} onClick={onConfirm} />
			</div>
		</div>
	);
};

export default ModalTemplate;

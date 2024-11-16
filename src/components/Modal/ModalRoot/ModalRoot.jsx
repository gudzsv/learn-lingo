import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalRoot.module.scss';
import Icon from '../../Icon/Icon.jsx';

const modalRoot = document.getElementById('modal-root');

const ModalRoot = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				{/* <button
					className={styles.modalCloseBtn}
					onClick={onClose}
					aria-label='Close Modal'
				>
					&times;
				</button> */}
				<button onClick={onClose} aria-label='Close Modal'>
					<Icon iconName={'close'} className={'closeModal'} />
				</button>
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default ModalRoot;

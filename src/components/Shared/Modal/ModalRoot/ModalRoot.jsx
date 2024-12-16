import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalRoot.module.scss';
import Icon from '../../Icon/Icon.jsx';

const modalRoot = document.getElementById('modal-root');

const ModalRoot = ({ isOpen, onClose, children, isSuccess }) => {
	const closeButtonRef = useRef(null);

	useEffect(() => {
		if (isOpen && closeButtonRef.current) {
			closeButtonRef.current.focus();
		}
	}, [isOpen]);

	useEffect(() => {
		if (isOpen && isSuccess) {
			// onClose();
		}
	}, [isSuccess, onClose]);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className={styles.modalOverlay} onClick={onClose} role='presentation'>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button
					ref={closeButtonRef}
					className={styles.modalCloseBtn}
					onClick={onClose}
					aria-label='Close Modal'
				>
					<Icon iconName={'close'} className={'iconClose'} />
				</button>
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default ModalRoot;

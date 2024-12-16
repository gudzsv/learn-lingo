import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../Icon/Icon.jsx';
import styles from './ModalRoot.module.scss';

const modalRoot = document.getElementById('modal-root') || document.body;

const ModalRoot = ({ isOpen, onClose, children }) => {
	const closeButtonRef = useRef(null);

	const handleKeyDown = useCallback(
		(e) => {
			if (e.key === 'Escape') {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		document.body.classList.toggle('modalOpen', isOpen);
		return () => document.body.classList.remove('modalOpen');
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		}
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, handleKeyDown]);

	useEffect(() => {
		if (isOpen && closeButtonRef.current) {
			closeButtonRef.current.focus();
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div
			className={styles.modalOverlay}
			onClick={onClose}
			role='presentation'
			aria-hidden={!isOpen}
		>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button
					ref={closeButtonRef}
					className={styles.modalCloseBtn}
					onClick={onClose}
					aria-label='Close Modal'
				>
					<Icon iconName='close' className='iconClose' />
				</button>
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default ModalRoot;

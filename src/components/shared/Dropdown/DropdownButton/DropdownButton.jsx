import React from 'react';
import Icon from '../../Icon/Icon.jsx';
import styles from './DropdownButton.module.scss';

const DropdownButton = React.memo(({ onClick, selectedItem, id }) => (
	<button onClick={onClick} className={styles.dropdownButton}>
		{id === 'prices' ? `${selectedItem} $` : selectedItem}
		<Icon iconName={'arrow-down'} />
	</button>
));

export default DropdownButton;

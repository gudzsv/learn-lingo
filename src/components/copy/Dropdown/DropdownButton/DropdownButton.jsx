import React from 'react';

import styles from './DropdownButton.module.scss';
import Icon from '../../Icon/Icon.js';

const DropdownButton = React.memo(({ onClick, selectedItem, id }) => (
	<button onClick={onClick} className={styles.dropdownButton}>
		{id === 'price_per_hour' ? `${selectedItem} $` : selectedItem}
		<Icon iconName={'arrow-down'} />
	</button>
));

export default DropdownButton;

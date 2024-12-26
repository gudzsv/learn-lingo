import React from 'react';

import clsx from 'clsx';
import Icon from '../../../Shared/Icon/Icon';
import styles from './DropdownButton.module.scss';

const DropdownButton = React.memo(({ isOpen, onClick, selectedItem, id }) => (
	<button
		onClick={onClick}
		className={clsx(styles.dropdownButton, { [styles['open']]: isOpen })}
	>
		{id === 'price_per_hour' ? `${selectedItem} $` : selectedItem}
		<Icon iconName={'arrow-down'} />
	</button>
));

export default DropdownButton;

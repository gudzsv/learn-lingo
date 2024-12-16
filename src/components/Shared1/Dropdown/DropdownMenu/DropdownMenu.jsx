import clsx from 'clsx';
import styles from './DropdownMenu.module.scss';
import React from 'react';

const DropdownMenu = React.memo(({ items, selectedItem, onItemSelect }) => (
	<ul className={styles.dropdownMenu}>
		{items.map((item, index) => (
			<li
				key={index}
				onClick={() => onItemSelect(item)}
				className={clsx(styles.dropdownItem, {
					[styles.activeItem]: item === selectedItem,
				})}
			>
				{item}
			</li>
		))}
	</ul>
));

export default DropdownMenu;

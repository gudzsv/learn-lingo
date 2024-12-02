import useDropdown from '../../../hooks/useDropdown.js';
import Icon from '../Icon/Icon';
import styles from './Dropdown.module.scss';
import clsx from 'clsx';

const Dropdown = ({
	id,
	label,
	items,
	activeDropdownId,
	setActiveDropdownId,
}) => {
	const { isOpen, selectedItem, toggleDropdown, handleSelect } = useDropdown(
		items[0],
		id,
		activeDropdownId,
		setActiveDropdownId
	);

	return (
		<div className={styles.dropdown} data-dropdown-id={id}>
			<p className={styles.dropdownLabel}>{label}</p>
			<button onClick={toggleDropdown} className={styles.dropdownButton}>
				{id === 'prices' ? selectedItem + ' $' : selectedItem}
				<Icon iconName={'arrow-down'} />
			</button>

			{isOpen && (
				<ul className={styles.dropdownMenu}>
					{items.map((item, index) => (
						<li
							key={index}
							onClick={() => handleSelect(item)}
							className={clsx(styles.dropdownItem, {
								[styles.activeItem]: item === selectedItem,
							})}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;

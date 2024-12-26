import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDropdown from '../../../hooks/useDropdown.js';
import { selectFilters } from '../../../redux/teachers/selectors.js';
import { setFilter } from '../../../redux/teachers/slice.js';
import styles from './Dropdown.module.scss';
import DropdownButton from './DropdownButton/DropdownButton.jsx';
import DropdownMenu from './DropdownMenu/DropdownMenu.jsx';

const Dropdown = ({
	id,
	label,
	items,
	activeDropdownId,
	setActiveDropdownId,
}) => {
	const filter = useSelector(selectFilters);

	const { isOpen, selectedItem, toggleDropdown, handleSelect, dropdownRef } =
		useDropdown(filter[id], id, activeDropdownId, setActiveDropdownId);

	const dispatch = useDispatch();

	const handleItemSelect = useCallback(
		(item) => {
			handleSelect(item);
			dispatch(setFilter({ ...filter, [id]: item }));
		},
		[handleSelect, id, filter, dispatch]
	);

	const memoizedItems = useMemo(() => items, [items]);

	return (
		<div ref={dropdownRef} className={styles.dropdown} data-dropdown-id={id}>
			<p className={styles.dropdownLabel}>{label}</p>

			<DropdownButton
				isOpen={isOpen}
				onClick={toggleDropdown}
				selectedItem={selectedItem}
				id={id}
			/>

			{isOpen && (
				<DropdownMenu
					items={memoizedItems}
					selectedItem={selectedItem}
					onItemSelect={handleItemSelect}
				/>
			)}
		</div>
	);
};

export default Dropdown;

import { useState, useEffect, useCallback } from 'react';

const useDropdown = (
	initialValue,
	id,
	activeDropdownId,
	setActiveDropdownId
) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(initialValue);

	const handleSelect = useCallback(
		(item) => {
			setSelectedItem(item);
			setIsOpen(false);
		},
		[setSelectedItem]
	);

	const toggleDropdown = useCallback(() => {
		if (isOpen) {
			setIsOpen(false);
			setActiveDropdownId('');
		} else {
			setActiveDropdownId(id);
			setIsOpen(true);
		}
	}, [isOpen, id, setActiveDropdownId]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			const dropdownElement = document.querySelector(
				`[data-dropdown-id="${id}"]`
			);

			if (dropdownElement && !dropdownElement.contains(event.target)) {
				setIsOpen(false);
				setActiveDropdownId('');
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [id, setActiveDropdownId]);

	useEffect(() => {
		if (activeDropdownId !== id) {
			setIsOpen(false);
		}
	}, [activeDropdownId, id]);

	return {
		isOpen,
		selectedItem,
		toggleDropdown,
		handleSelect,
	};
};

export default useDropdown;

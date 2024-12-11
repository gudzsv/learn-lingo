// import { useState, useEffect, useCallback, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { selectFilters } from '../redux/teachers/selectors.js';

// const useDropdown = (
// 	initialValue,
// 	id,
// 	activeDropdownId,
// 	setActiveDropdownId
// ) => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [selectedItem, setSelectedItem] = useState(initialValue);
// 	const dropdownRef = useRef(null);
// 	const filter = useSelector(selectFilters);

// 	const handleSelect = useCallback((item) => {
// 		setSelectedItem(item);
// 		setIsOpen(false);
// 	}, []);

// 	const toggleDropdown = useCallback(() => {
// 		setIsOpen((prev) => !prev);
// 		setActiveDropdownId((prev) => (prev === id ? '' : id));
// 	}, [id, setActiveDropdownId]);

// 	useEffect(() => {
// 		const handleClickOutside = (event) => {
// 			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// 				setIsOpen(false);
// 				setActiveDropdownId('');
// 			}
// 		};

// 		document.addEventListener('click', handleClickOutside, true);
// 		return () => {
// 			document.removeEventListener('click', handleClickOutside, true);
// 		};
// 	}, [setActiveDropdownId]);

// 	useEffect(() => {
// 		if (activeDropdownId !== id) {
// 			setIsOpen(false);
// 		}
// 	}, [activeDropdownId, id]);

// 	useEffect(() => {
// 		if (filter[id] !== undefined) {
// 			setSelectedItem(filter[id]);
// 		}
// 	}, [filter, id]);

// 	return {
// 		isOpen,
// 		selectedItem,
// 		toggleDropdown,
// 		handleSelect,
// 		dropdownRef,
// 	};
// };

// export default useDropdown;

import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from '../redux/teachers/selectors.js';

const useDropdown = (
	initialValue,
	id,
	activeDropdownId,
	setActiveDropdownId
) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(initialValue);
	const dropdownRef = useRef(null);
	const filter = useSelector(selectFilters);

	const handleSelect = useCallback((item) => {
		setSelectedItem(item);
		setIsOpen(false);
	}, []);

	const toggleDropdown = useCallback(() => {
		if (activeDropdownId === id) {
			setIsOpen(false);
			setActiveDropdownId('');
		} else {
			setIsOpen(true);
			setActiveDropdownId(id);
		}
	}, [id, activeDropdownId, setActiveDropdownId]);

	useEffect(() => {
		if (activeDropdownId !== id) {
			setIsOpen(false);
		}
	}, [activeDropdownId, id]);

	useEffect(() => {
		if (filter[id] !== undefined) {
			setSelectedItem(filter[id]);
		}
	}, [filter, id]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
				setActiveDropdownId('');
			}
		};

		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [setActiveDropdownId]);

	return {
		isOpen,
		selectedItem,
		toggleDropdown,
		handleSelect,
		dropdownRef,
	};
};

export default useDropdown;

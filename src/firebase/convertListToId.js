import { getDatabase, ref, get, set, push } from 'firebase/database';

const db = getDatabase();

export const migrateArrayToKeys = async () => {
	// Зчитати масив з Firebase
	const teachersRef = ref(db);
	const snapshot = await get(teachersRef);

	if (snapshot.exists()) {
		const teachersArray = snapshot.val();

		// Видалити старий масив
		await set(teachersRef, null);

		// Перетворити масив у структуру з унікальними ключами
		teachersArray.forEach(async (teacher) => {
			const newTeacherRef = push(teachersRef); // Згенерувати унікальний ключ
			await set(newTeacherRef, { id: newTeacherRef.key, ...teacher }); // Додати id
		});

		console.log('Міграція завершена!');
	} else {
		console.log('Дані відсутні!');
	}
};

// migrateArrayToKeys();

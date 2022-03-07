import { useCallback, useState, useEffect } from 'react';

const useLocalStorage = (
	key: string,
	defaultValue: () => string | number | boolean
) => {
	return useStorage(key, defaultValue, window.localStorage);
};

const useSessionStorage = (
	key: string,
	defaultValue: () => string | number | boolean
) => {
	return useStorage(key, defaultValue, window.sessionStorage);
};

const useStorage = (
	key: string,
	defaultValue: () => string | number | boolean,
	storageObject: any
) => {
	const [value, setValue] = useState(() => {
		const jsonValue = storageObject.getItem(key);
		if (jsonValue != null) return JSON.parse(jsonValue);

		if (typeof defaultValue === 'function') {
			return defaultValue();
		} else {
			return defaultValue;
		}
	});

	useEffect(() => {
		if (value === undefined) return storageObject.removeItem(key);
		storageObject.setItem(key, JSON.stringify(value));
	}, [key, value, storageObject]);

	const remove = useCallback(() => {
		setValue(undefined);
	}, []);

	return [value, setValue, remove];
};

export { useLocalStorage, useSessionStorage };

/*
Usage: 
Saves the value of the input field to local or session storage
const [name, setName, removeName] = useSessionStorage("name", "John")
const [age, setAge, removeAge] = useLocalStorage("age", 30)
*/

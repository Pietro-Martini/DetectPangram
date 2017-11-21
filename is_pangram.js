const isPangram = string => string.toLowerCase().replace(/[^a-zA-Z]+/g, '').split('').reduce((arr, char) => {
	if ( arr.indexOf(char) === -1 ) arr.push(char);
	return arr;
}, []).length === 26;
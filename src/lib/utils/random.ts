export function randomNumber() {
	return Math.round(Math.random() * 1000);
}

let timeoutId: number | undefined;

export function randomNumberAsync() {
	clearTimeout(timeoutId);
	return new Promise(
		(res) => (timeoutId = setTimeout(() => res(Math.round(Math.random() * 10000)), 1000))
	);
}

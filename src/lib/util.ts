export async function sleep(ms: number = 100 + Math.random() * 100) {
	const start = +new Date();
	await new Promise((resolve) => setTimeout(resolve, ms));
	const end = +new Date();

	return [start, end];
}

export function basename(path: string) {
	const parts = path.split('/');
	return parts.slice(parts.findIndex((x) => x == 'routes') + 1).join('/');
}

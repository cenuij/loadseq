import { basename, sleep } from '$lib/util.js';

export async function load({ parent }) {
	// await parent()

	const ts = await sleep();

	return {
		[basename(import.meta.url)]: ts
	};
}

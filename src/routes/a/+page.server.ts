import { basename, sleep, wait } from '$lib';

export async function load({ parent }) {
	if (wait(basename(import.meta.url))) await parent()

	const ts = await sleep();

	return {
		[basename(import.meta.url)]: ts
	};
}

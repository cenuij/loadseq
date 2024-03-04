import { basename, sleep, wait, toggleWait } from '$lib';
import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	if (wait(basename(import.meta.url))) await parent();

	const ts = await sleep();

	return {
		[basename(import.meta.url)]: ts
	};
}

export const actions = {
	async default({ request }) {
		const form  = (await request.formData());
		const name = form.get("name");
		const path = form.get("path");
		if (name) toggleWait(name);
		if (path) throw redirect(302, new URL(path).pathname)
	}
}
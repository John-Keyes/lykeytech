import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
	const {slug} = params;
	if(slug != "/") {
		throw error(404, {
			message: "Not found"
		});
	}
	return {
		slug
	};
};

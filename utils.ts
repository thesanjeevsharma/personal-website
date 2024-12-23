import type { Post } from '~/types';

export const fetchPosts = async (): Promise<Post[]> => {
	try {
		const response = await fetch(
			'https://dev.to/api/articles?username=thesanjeevsharma'
		);
		const data = await response.json();

		return data;
	} catch (err: any) {
		console.log(err);
		throw Error(err);
	}
};

export const getTopPosts = (posts: Post[], limit: number): Post[] => {
	return posts
		.sort((a, b) => b.public_reactions_count - a.public_reactions_count)
		.slice(0, limit);
};

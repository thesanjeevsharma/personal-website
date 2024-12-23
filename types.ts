export type SocialMediaInfo = {
	platform: 'Github' | 'LinkedIn' | 'Twitter' | 'Instagram';
	url: string;
	icon: JSX.Element;
	hoverClass: string;
};

export type Post = {
	id: number;
	title: string;
	description: string;
	readable_publish_date: string;
	slug: string;
	url: string;
	tag_list: string[];
	public_reactions_count: number;
};

export type Project = {
	name: string;
	url: string;
	description: string;
};

import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import type { SocialMediaInfo } from '~/types';

const socialLinks: SocialMediaInfo[] = [
	{
		platform: 'LinkedIn',
		url: 'https://linkedin.com/in/thesanjeevsharma',
		hoverClass: 'hover:text-blue-500',
		icon: <FaLinkedin size={18} color='#3b82f6' />
	},
	{
		platform: 'Instagram',
		url: 'https://instagram.com/thesanjeevsharma',
		hoverClass: 'hover:text-violet-500',
		icon: <FaInstagram size={18} color='#8b5cf6' />
	},
	{
		platform: 'Twitter',
		url: 'https://twitter.com/thesnjvsharma',
		hoverClass: 'hover:text-sky-500',
		icon: <FaTwitter size={18} color='#0ea5e9' />
	},
	{
		platform: 'Github',
		url: 'https://github.com/thesanjeevsharma',
		hoverClass: 'hover:text-neutral-500',
		icon: <FaGithub size={18} color='#f5f5f5' />
	}
];

const SocialLinks = () => {
	return (
		<div className='grid gap-4 grid-cols-2 md:grid-cols-4'>
			{socialLinks.map(({ platform, url, hoverClass, icon }) => (
				<a
					className={`flex items-center text-slate-500 mr-4 mb-4 md:mb-0 ${hoverClass}`}
					key={platform}
					href={url}
				>
					{icon}
					<span className='ml-1'>{platform}</span>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;

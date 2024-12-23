import React from 'react';

const Header = () => {
	return (
		<nav className='flex items-center justify-between h-20 md:h-32 text-slate-500 px-4 md:px-0'>
			<span>👨‍💻</span>
			<span className='relative'>
				building{' '}
				<a
					className='text-green-600'
					target='_blank'
					href='https://frontendcamp.in'
				>
					frontendcamp.in
				</a>
			</span>
		</nav>
	);
};

export default Header;

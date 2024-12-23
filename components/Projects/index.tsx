import React from 'react';

import { PROJECTS } from '~/constants';

const Projects = () => {
	return (
		<div className='flex flex-col mb-4'>
			<h3 className='uppercase mb-4 text-sm text-bold'>Projects 🌱</h3>
			<div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
				{PROJECTS.map(project => (
					<a
						key={project.name}
						className='border rounded-md border-slate-800 p-4 hover:border-lime-500 transition-colors'
						href={project.url}
						target='_blank'
					>
						<h4 className='mb-2'>{project.name}</h4>
						<p className='text-sm text-slate-500'>{project.description}</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default Projects;

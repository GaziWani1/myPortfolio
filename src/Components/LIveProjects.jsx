import React from 'react';
import { project } from '../constants/projects';
const LIveProjects = () => {
	return (
		<section className=' my-20 px-5 mt-10 lg:px-44'>
			<h1 className=' text-3xl font-bold text-center dark:text-white text-gray-700'>
				My Projects
			</h1>
			<div className='flex my-9  justify-center items-center gap-10 flex-wrap '>
				{project.map(project => (
					<div
						key={project.id}
						className='flex relative flex-col rounded-md border w-72 gap-5 p-3'
					>
						<div className='  w-full flex justify-between'>
							<h1 className='text-white dark:text-black dark:bg-white w-6 h-6 flex justify-center items-center rounded-full bg-black font-semibold text-[12px]'>
								{project.id}
							</h1>
							<h1 className=' text-black opacity-80 dark:text-white'>{project.name}</h1>
						</div>
						<p className=' text-black opacity-80 dark:text-white'>{project.description}</p>
					</div>
				))}
			</div>

			<div className='w-full flex justify-center items-center text-center'>
				<a
					className=' text-center  text-black opacity-80 dark:opacity-100 dark:text-white cursor-pointer flex'
					target='_blank'
					href='https://github.com/GaziWani1'
				>
					Find more on{' '}
					<span className='py-1 px-4 mx-2 hover:scale-90 transition-all rounded-md border-2'>
						{' '}
						...GitHub
					</span>
				</a>
			</div>
		</section>
	);
};

export default LIveProjects;

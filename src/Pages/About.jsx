import React from 'react';
import about from '../myImage/about.svg';
const About = () => {
	return (
		<section className=' mt-20 lg:px-44 p-5'>
			<div className='flex flex-col md:flex-row justify-between'>
				<div className=' self-center w-full md:w-1/2'>
					<h2 className='  text-3xl text-gray-800 dark:text-slate-100'>Who Am I?</h2>
					<p className='  tracking-widest font-normal text-gray-800 dark:text-white'>
						A Full Stack Developer proficient in both front-end and backend technologies ,
						accepted at designing , development, and deploying web applications. Skilled in
						languages like html , css and javascript, and frameworks such as react.js and
						node.js. Experienced in db management, server configuration and ensuring
						seamless user experience across platforms.
					</p>
				</div>

				<div className=' w-full md:w-1/2'>
					<img
						className='w-full'
						src={about}
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default About;

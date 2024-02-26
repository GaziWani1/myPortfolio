import React from 'react';

const skills = [
	'html',
	'CSS',
	'javascript',
	'React.js',
	'MUI',
	'Redux',
	'Talwind css',
	'Node.js',
	'Express.js',
	'Mongodb',
	'SQL',
	'GIT ',
	'GitHub',
];

const Skills = () => {
	return (
		<div className=' my-16 px-5 lg:px-44'>
			<h1 className=' text-center dark:text-white text-gray-800 text-2xl font-bold'>
				My Skills
			</h1>
			<div className=' flex justify-center mt-3 gap-7 flex-wrap'>
				{skills.map((skill, i) => (
					<div
						className='px-5 py-2 text-center text-white dark:text-gray-800 bg-slate-800
						shadow-slate-300
						dark:shadow-slate-800
						shadow-lg
						 dark:bg-zinc-100
						 rounded-full font-semibold
                        shadow-inner-[#e0e0e0]
                    '
					>
						{skill}
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;

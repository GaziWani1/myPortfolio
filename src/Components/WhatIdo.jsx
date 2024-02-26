import React from 'react';

const WhatIdo = () => {
	return (
		<div className=' my-20 lg:px-44'>
			<div className=' py-3 rounded-md px-4 gap-3  dark:bg-gray-800 bg-zinc-50 shadow-md shadow-gray-100 dark:shadow-slate-800 border  flex justify-between flex-col'>
				<h1 className=' text-xl dark:text-white text-slate-900'>Work Experience</h1>
				<div className='flex justify-between'>
					<h2 className='text-xl dark:text-white text-slate-900'>Red Stag Labs</h2>
					<h2 className='text-md dark:text-white text-slate-900'>
						20 Mar 2022 - PRESENT
					</h2>
				</div>
				<p className='dark:text-white text-slate-800 '>
					I am responsible for creating and maintaining both the front-end and backend
					aspects of web application.The includes designing user interfaces, implementing
					features , managing database, and ensuring overall functionality and
					performance.
				</p>
			</div>
		</div>
	);
};

export default WhatIdo;

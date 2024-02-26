import React from 'react';
import myimage from '../myImage/myimage.png';
import resumePdf from '../myImage/resumePdf.pdf';
const Banner = () => {
	return (
		<div className=' mt-28 md:mt-16 px-5 lg:px-44'>
			<div className=' flex flex-col md:flex-row gap-12 justify-between dark:text-white text-slate-900 font-semibold '>
				<div className='lg:w-1/2 flex flex-col items-center md:items-end self-center  '>
					<p className=' text-center md:text-start my-1 lg:my-4 text-sm md:text-2xl  '>
						<span className=' text-center md:text-start   my-4 text-red-500'>Hello, </span>I
						am Gazi Fayaz Wani.
					</p>
					<h1 className=' text-center md:text-start my-1 font-bold text-xl md:text-3xl'>
						Full stack Developer | React.js | Node.js
					</h1>

					<a
						target='_blank'
						href='https://www.linkedin.com/in/gazi-wani/'
						className=' text-center w-36 my-1 text-white font-normal dark:bg-gray-800 dark:text-white bg-slate-900 px-7 py-2 rounded-full text-sm'
					>
						Linked in
					</a>
					<a
						href={resumePdf}
						download="gazi's resume"
						target='_blank'
						rel='noreferrer'
					>
						<button className=' w-56 my-1 dark:text-white text-slate-900 border font-normal border-slate-900  dark:border-white px-7 py-2 rounded-full text-sm'>
							Dowmload Resume
						</button>
					</a>
				</div>
				<div className='lg:w-1/2  '>
					<img
						className=' h-80 lg:h-auto lg:w-96 mx-auto'
						src={myimage}
						alt='no image'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;

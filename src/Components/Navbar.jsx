import React, { useState } from 'react';
import ThemeBtn from './ThemeBtn';
import Nav from './Nav';

const Navbar = () => {
	const [collapse, setCollapse] = useState(false);
	const toggleNav = () => {
		collapse ? setCollapse(true) : setCollapse(false);
	};

	return (
		<div className='w-full px-6 fixed top-0 left-0 z-50 backdrop-blur-sm py-2 lg:px-44  flex flex-col md:flex-row justify-between  '>
			<Nav collapse={collapse} />
			<div className=' w-full md:w-1/2 flex justify-between '>
				<h1 className=' p-1 whitespace-nowrap text-sm md:text-2xl dark:text-zinc-200 text-blue-500 font-semibold '>
					Gazi
					<span className=' font-bold dark:text-white text-gray-900'> Wani</span>
				</h1>
				<ThemeBtn />
				<button
					onClick={() => setCollapse(!collapse)}
					className=' hover:scale-95 block md:hidden'
				>
					<svg
						className='w-6 h-6 text-gray-800 dark:text-white'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 16 12'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M1 1h14M1 6h14M1 11h7'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Navbar;

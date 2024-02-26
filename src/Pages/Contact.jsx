import React from 'react';
import contact from '../myImage/contact.svg';
const Contact = () => {
	return (
		<section className=' mt-20 lg:px-44 p-5'>
			<h2 className=' my-3 text-3xl text-gray-800 dark:text-slate-100'>
				Write Something!
			</h2>
			<div className='flex flex-col md:flex-row justify-between'>
				<form
					onSubmit={e => {
						e.preventDefault();
					}}
					action=''
					className=' p-3 rounded-md shadow-sm bg-zinc-100 dark:bg-gray-800 w-full md:w-4/12 h-auto '
				>
					<div className=' p-3 flex flex-col'>
						<label
							htmlFor='name'
							className=' my-1 text-gray-800 dark:text-white font-semibold'
						>
							Name
						</label>
						<input
							className=' border-2 focus:border-blue-200 rounded-md text-gray-800 dark:text-white px-1 py-2 outline-none bg-neutral-200 dark:bg-slate-900'
							type='text'
							name=''
							id=''
						/>
					</div>
					<div className=' p-3 flex flex-col'>
						<label
							htmlFor='name'
							className=' my-1 text-gray-800 dark:text-white font-semibold'
						>
							Email
						</label>
						<input
							className=' border-2 focus:border-blue-300 rounded-md text-gray-800 dark:text-white px-1 py-2 outline-none bg-neutral-200 dark:bg-slate-900'
							type='text'
							name=''
							id=''
						/>
					</div>
					<div className=' p-3 flex flex-col'>
						<label
							htmlFor='name'
							className=' my-1  text-gray-800 dark:text-white font-semibold'
						>
							Msg
						</label>
						<textarea
							className=' border-2 focus:border-blue-300 rounded-md text-gray-800 dark:text-white px-1 py-2 outline-none bg-neutral-200 dark:bg-slate-900'
							type='text'
							name=''
							id=''
						/>
					</div>
					<button className=' transition-all hover:scale-90 mx-3 rounded-md shadow-md  text-sm  bg-neutral-800 dark:bg-gray-700 text-white px-9 py-2 '>
						Send
					</button>
				</form>
				<div className=' w-full md:w-1/2'>
					<img
						className=' h-72 w-full'
						src={contact}
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;

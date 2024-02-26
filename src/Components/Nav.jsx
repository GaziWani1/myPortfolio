import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ collapse }) => {
    return (
        <ul className={`order-2 ${collapse ? '' : 'hidden'} text-slate-900 dark:text-white md:flex md:flex-row flex-col justify-between items-start md:items-center gap-8 font-semibold`}>
            <li className=' mt-10 md:m-0  text-sm'>
                <NavLink to='/'>
                    Home
                </NavLink>
            </li>
            <li className='mt-10 md:m-0  text-sm'>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </li>
            <li className='mt-10 md:m-0  text-sm'>
                <NavLink to='/about'>
                    About
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav
import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuBar = ({toggleMenu}) => {
  return (
    <div className='w-4/5 h-screen hidden bg-white fixed top-0 left-0 bottom-0 z-50 shadow-md shadow-black bg-opacity-70 backdrop-blur-md menubar'>
        <div className="flex flex-col p-2 w-full h-max gap-4">
            <NavLink
                to='/'
                className={({ isActive }) => 
                    `w-full h-[50px] rounded-md flex items-center p-2 ${isActive ? 'bg-black text-white font-bold rounded-md' : ''}`
                }
                onClick={toggleMenu}
            >
                Home
            </NavLink>
            <NavLink
                to='/about-me'
                className={({ isActive }) => 
                    `w-full h-[50px] rounded-md flex items-center p-2 ${isActive ? 'bg-black text-white font-bold rounded-md' : ''}`
                }
                onClick={toggleMenu}
            >
                About
            </NavLink>
            <NavLink
                to='/contact-me'
                className={({ isActive }) => 
                    `w-full h-[50px] rounded-md flex items-center p-2 ${isActive ? 'bg-black text-white font-bold rounded-md' : ''}`
                }
                onClick={toggleMenu}
            >
                Contact
            </NavLink>
            <NavLink
                to='/my-projects'
                className={({ isActive }) => 
                    `w-full h-[50px] rounded-md flex items-center p-2 ${isActive ? 'bg-black text-white font-bold rounded-md' : ''}`
                }
                onClick={toggleMenu}
            >
                Project
            </NavLink>
            <NavLink
                to='/my-xp-level'
                className={({ isActive }) => 
                    `w-full h-[50px] rounded-md flex items-center p-2 ${isActive ? 'bg-black text-white font-bold rounded-md' : ''}`
                }
                onClick={toggleMenu}
            >
                Xp Level
            </NavLink>
        </div>
    </div>
  )
}

export default MenuBar
import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const TopBar = () => {
  return (
    <div className="w-full h-[70px] flex items-center justify-between">
        <div className="flex p-4 logo-container">
            <h1 className='text-2xl font-bold ml-10'>Kristal Dev</h1>
        </div>
        <div className="flex flex-row gap-3 mr-20 topbar">
            <NavLink
                to='/'
                className={({ isActive }) => 
                    `text-[18px] font-semibold p-2 hover:bg-[#4b5563] hover:bg-opacity-15 hover:rounded-md ${isActive ? 'bg-[#4b5563] bg-opacity-15 rounded-md' : ''}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/about-me'
                className={({ isActive }) => 
                    `text-[18px] font-semibold p-2 hover:bg-[#4b5563] hover:bg-opacity-15 hover:rounded-md ${isActive ? 'bg-[#4b5563] bg-opacity-15 rounded-md' : ''}`
                }
            >
                About
            </NavLink>
            <NavLink
                to='/contact-me'
                className={({ isActive }) => 
                    `text-[18px] font-semibold p-2 hover:bg-[#4b5563] hover:bg-opacity-15 hover:rounded-md ${isActive ? 'bg-[#4b5563] bg-opacity-15 rounded-md' : ''}`
                }
            >
                Contact
            </NavLink>
            <NavLink
                to='/projects'
                className={({ isActive }) => 
                    `text-[18px] font-semibold p-2 hover:bg-[#4b5563] hover:bg-opacity-15 hover:rounded-md ${isActive ? 'bg-[#4b5563] bg-opacity-15 rounded-md' : ''}`
                }
            >
                Projects
            </NavLink>
            <NavLink
                to='/xp'
                className={({ isActive }) => 
                    `text-[18px] font-semibold p-2 hover:bg-[#4b5563] hover:bg-opacity-15 hover:rounded-md ${isActive ? 'bg-[#4b5563] bg-opacity-15 rounded-md' : ''}`
                }
            >
                XP Level
            </NavLink>
        </div>
    </div>
  )
}

export default TopBar
import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import {Navlinks} from './index'

const MenuBar = ({toggleMenu}) => {
    const linkVariants = {
        hidden:{
            opacity:0,
            x: -3,
        },
        visible:(i)=>({
            opacity:1,
            x:0,
            transition:{
                delay: i * 0.2
            }
        })
    }
  return (
    <div className='w-4/5 h-screen hidden bg-white fixed top-0 left-0 bottom-0 z-50 shadow-md shadow-black bg-opacity-70 backdrop-blur-md menubar'>
        <motion.div className="flex flex-col p-2 w-full h-max gap-4">
            {
                Navlinks.map((navlink, i)=>(
                    <motion.div
                        className='w-full h-[50px]'
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={linkVariants}
                        key={i}
                    >
                        <NavLink
                            to={`/${navlink}`}
                            className={({ isActive }) => 
                                `w-full h-full rounded-md flex items-center p-2 ${isActive ? 'bg-black text-white font-bold rounded-md' : ''}`
                            }
                            onClick={toggleMenu}
                        >  
                            {navlink}
                        </NavLink>
                    </motion.div>
                ))
            }
            
            {/* <NavLink
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
            </NavLink> */}
        </motion.div>
    </div>
  )
}

export default MenuBar
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import {Navlinks} from './index.js'
import {motion} from 'framer-motion'

const TopBar = () => {
    const linkVariants = {
        hidden:{
            opacity:0,
        },
        visible:(i)=>({
            opacity:1,
            transition:{
                delay: i * 0.2,
                duration: 1,
            }
        })
    }
  return (
    <div className="w-full h-[70px] flex items-center justify-between logo-container">
        <div className="flex p-4 logo-container-2">
            <Link to='/' className='text-2xl font-bold ml-10'>Kristal Dev</Link>
        </div>
        <div className="flex flex-row gap-3 mr-20 topbar">
            {
                Navlinks.map((navlink, i)=>(
                    <motion.div
                        className='w-max h-max'
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={linkVariants}
                        key={i}
                    >
                        <NavLink
                            to={`/${navlink}`}
                            className={({ isActive }) => 
                                `text-[18px] font-semibold p-2 hover:bg-[#4b5563] hover:bg-opacity-15 hover:rounded-md ${isActive ? 'bg-[#4b5563] bg-opacity-15 rounded-md' : ''}`
                            }
                        >  
                            {navlink}
                        </NavLink>
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default TopBar
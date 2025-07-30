import React from 'react'
import { Navlinks } from './index.js'
import { motion } from 'framer-motion'
import Scrollspy from 'react-scrollspy'

const TopBar = () => {
  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 1,
      },
    }),
  }

  return (
    <div className="w-full hidden md:flex h-[70px] z-50 bg-white fixed items-center justify-between logo-container">
      <div className="flex p-4 logo-container-2">
        <a href="#home" className="text-2xl font-bold ml-10">
          Kristal Dev
        </a>
      </div>

      <Scrollspy
        items={Navlinks.map((link) => link.path)} // section IDs
        currentClassName="bg-[#4b5563] bg-opacity-15 rounded-md" // class added to active link
        componentTag="div"
        className="flex flex-row gap-3 mr-20 topbar"
        offset={-100} // offset for activation
      >
        {Navlinks.map((navlink, i) => (
          <motion.div
            className="w-max h-max"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={linkVariants}
            key={navlink.id}
          >
            <a
              href={`#${navlink.path}`}
              className="text-[18px] font-semibold p-2 hover:bg-[#4b5563] hover:bg-opacity-15 hover:rounded-md transition-all duration-200 scrollspy-link"
            >
              {navlink.label}
            </a>
          </motion.div>
        ))}
      </Scrollspy>
    </div>
  )
}

export default TopBar

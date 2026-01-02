import React, { useState, useRef, useEffect } from "react";
import { Navlinks } from "./index.js";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const sidebarRef = useRef(null);

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { x: "-100%", transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleNavlinkClick = (navlink) => {
    setActiveLink(navlink);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden z-[100] w-full">
      <div
        className={`fixed top-4 left-4 z-[100] transition-transform ${
          isOpen ? "translate-x-72" : "translate-x-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white shadow-md backdrop-blur-sm"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Sidebar with Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[40]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              className="fixed top-0 left-0 w-[80%] sm:w-[70%] h-full bg-white/70 backdrop-blur-md shadow-lg p-6 pt-24 flex flex-col gap-6 z-[80] rounded-tr-2xl rounded-br-2xl"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {Navlinks.map((navlink) => (
                <a
                  key={navlink.id}
                  href={`#${navlink.path}`}
                  onClick={() => handleNavlinkClick(navlink.path)}
                  className={`flex items-center gap-4 text-xl p-2 font-medium text-gray-800 hover:text-blue-600 transition duration-200 relative group ${
                    activeLink === navlink.path ? "bg-black text-white rounded-r-3xl" : ""
                  }`}
                >
                  <span className="">{navlink.icon}</span>
                  <span className="group-hover:underline">{navlink.label}</span>
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSidebar;

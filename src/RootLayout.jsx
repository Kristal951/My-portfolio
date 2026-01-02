import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import './index.css'

const RootLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <div className='w-full h-screen overflow-y-hidden bg-gradient-to-br from-[#f4f3f3] via-white to-[#f4f3f3] relative'>
      <TopBar />
      <div className="hidden w-full items-start justify-end absolute top-2 right-2 harmburger-container">
        {showMenu ? (
          <MdCancel fontSize={24} onClick={toggleMenu} />
        ) : (
          <RxHamburgerMenu fontSize={24} onClick={toggleMenu} />
        )}
      </div>
      <div className={`${showMenu ? 'flex h-max w-full' : 'hidden'}`}>
        {/* <MenuBar toggleMenu={toggleMenu}/> */}
      </div>
      <section className='w-full h-screen'>
        <Outlet />
      </section>
    </div>
  );
}

export default RootLayout;

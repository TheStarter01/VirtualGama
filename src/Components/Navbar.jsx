import React from 'react'
import navItems from '../constants/index.jsx';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [MenuIconButton, SetMenuIconButton] = useState(false);

  const toggleMenu = () =>{
      SetMenuIconButton(!MenuIconButton)
  }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className="container px-4 m-auto reltaive text-sm">
            <div className='flex justify-between items-center'>
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src="..\src\assets\logo.png" />
                    <span className='text-xl tracking-tight'>VirtualGama</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((Items, index) => (<li key={index}><a href={Items.href}>{Items.label}</a></li>))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                  <a className='py-2 px-3 border rounded-md cursor-pointer'>
                    Sign In
                  </a>
                  <a className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md cursor-pointer'>
                    Create an account
                  </a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                  <button onClick={toggleMenu}>
                      {MenuIconButton ? <X/> : <Menu/>}
                  </button>
                </div>
            </div>
            {MenuIconButton && (<div className="fixed right-0 mt-[3.1%] z-20 bg-neutral-900 w-full p-12 flex flex-col jsutify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4 text-center">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-5">
                <a href="" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a href="" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create an account</a>
              </div>
              </div>
            )}
        </div>

    </nav>
  )
}

export default Navbar
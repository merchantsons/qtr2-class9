"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
    const handleLinkClick = () => { setIsMenuOpen(false); }; // Close the menu when a link is clicked


    return (
        <div className="headerback sticky top-0 z-50">
            {/* Full navbar for larger screens */}
            <div className="bg-[#EBFEFF] hidden md:flex justify-between items-center mx-auto p-5 w-[65vw]">
                <a href="/"><div className='text-[3vmin] font-semibold'>Rizfan</div></a>
                <ul className="flex space-x-8 justify-center text-black md:text-[1vmin] lg:text-[2.5vmin]">
                    <li><Link href="/" className="pr-6 pl-6 pt-2 pb-2  hover:bg-sky-900 hover:text-white rounded">Home</Link></li>
                    <li><Link href="#" className="pr-6 pl-6 pt-2 pb-2  hover:bg-sky-900 hover:text-white rounded">About</Link></li>
                    <li><Link href="#" className="pr-6 pl-6 pt-2 pb-2  hover:bg-sky-900 hover:text-white rounded">Skill</Link></li>
                    <li><Link href="#" className="pr-6 pl-6 pt-2 pb-2  hover:bg-sky-900 hover:text-white rounded">Project</Link></li>
                    <li><Link href="#" className="pr-6 pl-6 pt-2 pb-2  hover:bg-sky-900 hover:text-white rounded">Contact</Link></li>
                </ul>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="md:hidden flex items-center p-4">            
                <button onClick={toggleMenu} className="text-black text-2xl">
                    {/* Hamburger icon */}
                    {isMenuOpen ? '✖' : '☰'}
                </button>
                <a href="/"><div className=''></div></a><div className='ml-[37vmin] font-bold text-[4vmin]'>Rizfan</div>
            </div>

            {/* Dropdown menu for small screens */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 h-full w-[40vmin] bg-cyan-600 shadow-lg text-center">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-white border-4 border-cyan-900 p-2">
                            ✖
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-4 p-5">
                        <div className='bg-black border-red-900 text-white'>RESUME SITE MENU</div>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>About</Link></li>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Skill</Link></li>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Project</Link></li>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>                    
                </div>
            )}
            <hr className='bg-black h-[.2vmin]'/>
        </div>
    );
};

export default Navbar;
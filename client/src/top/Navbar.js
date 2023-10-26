import React from 'react'
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/theme';
import logo from '../img/logo.png';
import moon from '../img/moon.png';
// import { Link } from 'react-router-dom';

function Navbar() {
    const { theme, darkToggle } = useContext(ThemeContext);
    const [hamburger, setHamburger] = useState(true);

    console.log(theme)

    return (
        <nav id="navbar" className="w-full bg-white fixed top-0 z-10 dark:bg-slate-900 transition-colors duration-700">
            <div id="navbar-container" className="container mx-auto py-5 flex items-center justify-between">
                <div id="navbar-logo-container" className="flex items-center gap-2">
                    <img id="logo" className="object-cover w-8 ml-5" src={logo} alt="logo" />
                    <ul id="site-name">
                        <li className='text-2xl font-bold text-indigo-900 dark:text-white'>Portfolio</li>
                        <li className="text-small text-indigo-400">Eric Song</li>
                    </ul>
                </div>
                <ul id="navbar-links-container" className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 lg:text-base md:text-sm font-bold uppercase">
                    <li className="hover:text-gray-500">
                        <a href="#top">Homepage</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#about-me">About Me</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#services">Services</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#contact-me">Contacts</a>
                    </li>
                </ul>
                {/* <img id="navbar-dark-light-toggle" src={moon} className="hidden md:block w-5 cursor-pointer mr-5" alt="toggle dark light modes" onClick={() => darkToggle()} /> */}
                {theme !== 'dark' ?
                    <svg id="navbar-dark-light-toggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hidden md:block w-6 cursor-pointer mr-5" onClick={() => darkToggle()}>
                        <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hidden md:block w-6 cursor-pointer mr-5 text-white" onClick={() => darkToggle()}>
                        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                }

                {hamburger ?
                    <div id="hamburger" className="space-y-1 md:hidden cursor-pointer pr-3" onClick={() => setHamburger(!hamburger)}>
                        <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
                        <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
                        <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
                    </div>
                    :
                    <div id="hamburger" className="space-y-1 md:hidden cursor-pointer pr-3 z-20" onClick={() => setHamburger(!hamburger)}>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                }
                {hamburger ?
                    null
                    :
                    <ul id="menu" className="bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
                        <li>
                            <a onClick={() => setHamburger(true)} href="#top">Homepage</a>
                        </li>
                        <li>
                            <a onClick={() => setHamburger(true)} href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a onClick={() => setHamburger(true)} href="#services">Services</a>
                        </li>
                        <li>
                            <a onClick={() => setHamburger(true)} href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a onClick={() => setHamburger(true)} href="#contact-me">Contacts</a>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    );
};

export default Navbar
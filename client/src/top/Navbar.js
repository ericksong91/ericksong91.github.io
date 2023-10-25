import React from 'react'
import { useState } from 'react';
import logo from '../img/logo.png'
import moon from '../img/moon.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [hamburger, setHamburger] = useState(true);

    return (
        <nav id="navbar" class="w-full bg-white fixed top-0 z-10">
            <div id="navbar-container" class="container mx-auto py-5 flex items-center justify-between">
                <div id="navbar-logo-container" class="flex items-center gap-2">
                    <img id="logo" class="object-cover w-8 ml-5" src={logo} alt="logo" />
                    <ul id="site-name">
                        <li class='text-2xl font-bold text-indigo-900'>Portfolio</li>
                        <li class="text-small text-indigo-400">Eric Song</li>
                    </ul>
                </div>
                <ul id="navbar-links-container" class="hidden md:flex space-x-10 text-gray-600 lg:text-base md:text-sm font-bold uppercase">
                    <li class="hover:text-gray-500">
                        <a href="#top">Homepage</a>
                    </li>
                    <li class="hover:text-gray-500">
                        <a href="#about-me">About Me</a>
                    </li>
                    <li class="hover:text-gray-500">
                        <a href="#services">Services</a>
                    </li>
                    <li class="hover:text-gray-500">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="hover:text-gray-500">
                        <a href="#contact-me">Contacts</a>
                    </li>
                </ul>
                <img id="navbar-dark-light-toggle" src={moon} class="hidden md:block w-5 cursor-pointer mr-5" alt="toggle dark light modes" />

                {hamburger ?
                    <div id="hamburger" class="space-y-1 md:hidden cursor-pointer pr-3" onClick={() => setHamburger(!hamburger)}>
                        <div class="w-6 h-0.5 bg-black"></div>
                        <div class="w-6 h-0.5 bg-black"></div>
                        <div class="w-6 h-0.5 bg-black"></div>
                    </div>
                    :
                    <div id="hamburger" class="space-y-1 md:hidden cursor-pointer pr-3 z-20" onClick={() => setHamburger(!hamburger)}>
                        <div class="w-6 h-0.5 bg-white"></div>
                        <div class="w-6 h-0.5 bg-white"></div>
                        <div class="w-6 h-0.5 bg-white"></div>
                    </div>
                }
                {hamburger ?
                    null
                    :
                    <ul id="menu" class="bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
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
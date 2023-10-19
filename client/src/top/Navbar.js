import React from 'react'
import logo from '../img/logo.png'

function Navbar() {
    return (
        <nav class="w-full fixed top-0">
            <div class="container mx-auto py-5 flex justify-between">
                <div class="flex items-center gap-2">
                    <img class="object-cover w-8" src={logo} alt="logo" />
                    <span class='text-2xl font-bold text-indigo-900'>Portfolio.</span>
                </div>
                <ul>
                    <li>
                        <a href="https://www.google.com" rel="noreferrer" target="_blank">Google</a>
                    </li>
                </ul>
                <span>3</span>
            </div>
        </nav>
    );
};

export default Navbar
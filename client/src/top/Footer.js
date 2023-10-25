import React from 'react'
import logo from '../img/logo.png'
import { facebook, twitter, instagram, linkedin } from '../img';

function Footer() {
    return (
        <nav id="footer" class="w-full bg-gray-800">
            <div id="footer-container" class="container mx-auto py-5 flex items-center justify-between">
                <div id="footer-logo-container" class="flex items-center gap-2">
                    <img id="logo" class="object-cover w-8 ml-5" src={logo} alt="logo" />
                    <ul id="site-name">
                        <li class='text-2xl font-bold text-indigo-500'>Portfolio</li>
                        <li class="text-small text-white font-semibold">Eric Song</li>
                    </ul>
                </div>
                <span class="hidden md:block font-medium text-white">© 2023 Eric Song. Designed Using ReactJS and Tailwind CSS</span>
                <div class="flex gap-2 pr-4">
                    <img class="w-4 cursor-pointer" src={facebook} alt="facebook link" />
                    <img class="w-4 cursor-pointer" src={instagram} alt="instagram link" />
                    <img class="w-4 cursor-pointer" src={linkedin} alt="linkedin link" />
                    <img class="w-4 cursor-pointer" src={twitter} alt="twitter link" />
                </div>
            </div>
        </nav>
    );
};

export default Footer;
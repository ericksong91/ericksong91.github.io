import React from 'react';
import penguin from '../img/humboldt.png'

function Introduction() {
    return (
        <div id="introduction-container">
            <img class="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover rounded-xl " src={penguin} alt="Eric Song" />
            <div class="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big -z-10 bg-indigo-500 rounded-full" />
            <div class="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-5xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
                <span class="text-gray-600">Software</span>
                <p class="text-red-500">Developer</p>
            </div>
            <div id="intro-description-card" class="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
                <h1 class="text-4xl font-bold text-indigo-900">Hi, I'm Eric</h1>
                <p class="text-gray-400">IPSEM LOREM HELLO TESTING.</p>
                <a href="#contact" class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit">Hire Me</a>
            </div>
        </div>
    );
};

export default Introduction;
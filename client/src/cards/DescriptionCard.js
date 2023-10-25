import React from 'react';

function DescriptionCard() {
    return (
        <div id="intro-description-card" class="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
            <h1 class="text-4xl font-bold text-indigo-900">Hi, I'm Eric</h1>
            <p class="text-gray-400">IPSEM LOREM HELLO TESTING.</p>
            <a href="#contact" class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit">Hire Me</a>
        </div>
    )
};

export default DescriptionCard;
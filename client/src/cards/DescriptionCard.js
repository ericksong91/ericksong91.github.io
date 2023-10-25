import React from 'react';

function DescriptionCard() {
    return (
        <div id="intro-description-card" className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg 
            absolute top-0 bottom-0 m-auto right-10 bg-white 
            dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3"
        >
            <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Eric</h1>
            <p className="text-gray-400">IPSEM LOREM HELLO TESTING.</p>
            <a href="#contact" className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit">Hire Me</a>
        </div>
    )
};

export default DescriptionCard;
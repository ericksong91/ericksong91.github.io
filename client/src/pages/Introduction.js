import React from 'react';
import DescriptionCard from '../cards/DescriptionCard';
import penguin from '../img/humboldt.png'

function Introduction() {
    return (
        <div id="introduction-container">
            <img className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover rounded-xl " src={penguin} alt="Eric Song" />
            <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big -z-10 bg-red-300 rounded-full" />
            <div className="absolute top-1/3 left-5 text-3xl sm:left-10 sm:text-4xl md:left-5 md:text-5xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
                <span className="text-gray-600">Software</span>
                <p className="text-red-500">Developer</p>
            </div>
            <DescriptionCard />
        </div>
    );
};

export default Introduction;
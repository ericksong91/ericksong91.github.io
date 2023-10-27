import React from 'react';
import DescriptionCard from '../cards/DescriptionCard';
import penguin from '../img/humboldt.png'

function Introduction() {
    return (
        <div id="introduction-container" className="h-screen">
            <div className="h-screen bg-gradient-to-t from-indigo-200 opacity-100 transition-color duration-1000">
                <div className='h-screen bg-gradient-to-t opacity-0 z-10 dark:opacity-100 from-slate-800 to-slate-900 transition-color duration-1000'></div>
                    <img className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover rounded-xl " src={penguin} alt="Eric Song" />
                    <div className="hidden lg:block absolute bottom-0 right-0 left-0 mx-auto w-big-w h-big-h -z-10 bg-red-300 rounded-tl-full rounded-tr-full overflow-hidden" />
                    <div className="absolute top-1/3 left-5 text-3xl sm:left-10 sm:text-4xl md:left-5 md:text-5xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
                        <span className="text-gray-600">Software</span>
                        <p className="text-red-500">Developer</p>
                    </div>
                <DescriptionCard />
            </div>
        </div>
    );
};

export default Introduction;
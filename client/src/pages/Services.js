import React from 'react';
import ServiceCard from '../cards/ServiceCard';

function Services() {
    return (
        <div id="services" className="dark:bg-slate-900 py-40">
            <div id="service-overview" className="flex flex-col gap-3 items-center">
                <h1 className="text-indigo-600 font-bold">SERVICES</h1>
                <h1 className="text-3xl dark:text-white">What can I offer?</h1>
                <p className="w-1/2 text-center text-gray-400">
                    Ipsem Lorem asdfiojaoibj sfgoibj sgoijs bsoifjgboisjg oisjgfboisjgb
                    oisjgb boisjgb boijgb doifjvsodifjvsodiffjvoi sdofivjsodfjv oidfjvvoijsdfvo isjfvo
                </p>
            </div>
            <div id="service-cards" className="p-5 sm:p-0 flex flex-wrap justify-between">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    );
};

export default Services;
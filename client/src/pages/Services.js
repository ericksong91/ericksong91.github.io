import React from 'react';
import ServiceCard from '../cards/ServiceCard';

function Services() {
    return (
        <div id="services" class="py-28">
            <div id="service-overview" class="flex flex-col gap-3 items-center">
                <h1 class="text-indigo-600 font-bold">SERVICES</h1>
                <h1 class="text-3xl">What can I offer?</h1>
                <p class="w-1/2 text-center text-gray-400">
                    Ipsem Lorem asdfiojaoibj sfgoibj sgoijs bsoifjgboisjg oisjgfboisjgb
                    oisjgb boisjgb boijgb doifjvsodifjvsodiffjvoi sdofivjsodfjv oidfjvvoijsdfvo isjfvo
                </p>
            </div>
            <div id="service-cards" class="p-5 sm:p-0 flex flex-wrap justify-between">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    );
};

export default Services;
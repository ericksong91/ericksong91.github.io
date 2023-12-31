import React from 'react';
import icon from '../img/placeholder_icon.png'

function ServiceCard() {
    const serviceName = "Project Name";
    const description = "Short Description";

  return (
    <div id="service-card" className="w-full cursor-pointer shadow-md rounded-lg p-5 my-3 md:my-10 md:mx-1 md:w-3/12 flex flex-col gap-3 dark:bg-indigo-900">
        <img src={icon} alt={serviceName} className="w-10"/>
        <h1 className="font-medium text-lg dark:text-white">{serviceName}</h1>
        <p className="text-gray-400 dark:text-white">{description}</p>
        <a className="text-indigo-600 font-semibold text-sm" href="https://www.google.com">Learn More</a>
    </div>
  );
};

export default ServiceCard;
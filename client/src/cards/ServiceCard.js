import React from 'react';
import icon from '../img/placeholder_icon.png'

function ServiceCard() {
    const serviceName = "Project Name";
    const description = "Short Description";

  return (
    <div id="service-card" class="w-full md:w-4/12 shadow-md rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
        <img src={icon} alt={serviceName} class="w-10"/>
        <h1 class="font-medium text-lg dark:text-white">{serviceName}</h1>
        <p class="text-gray-400 dark:text-white">{description}</p>
        <a class="text-indigo-600 font-semibold text-sm" href="https://www.google.com">Learn More</a>
    </div>
  );
};

export default ServiceCard;
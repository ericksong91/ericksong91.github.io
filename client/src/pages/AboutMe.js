import React from 'react';
import penguin from '../img/crestPenguin.jpg';

function AboutMe() {
  return (
    <div id="about-me" className="px-10 dark:bg-slate-900" >
      <div className="container mx-auto py-28 flex flex-col-reverse xl:flex-row items-center gap-20">
        {/* Left Side */}
        <div id="left-side-about" className="relative">
          <div className="h-full rounded-full overflow-hidden md:w-96">
            <img src={penguin} alt="Eric Song" />
          </div>
        </div>
        {/* Right Side */}
        <div id="right-side-about" className="my-auto flex flex-col gap-2 m-10 xl:m-0">
          <h1 className="text-indigo-600 bold">ABOUT ME</h1>
          <h1 className="font-medium text-3xl dark:text-white">IPSEM</h1>
          <h1 className="font-medium text-3xl dark:text-white">LOREM</h1>
          <p className="text-gray-500 text-xl break-normal mb-10 xl:pr-40 md:flex md:items-center">
            Experienced and passionate engineer who worked 6 years in the aerospace and nuclear
            industries. Is now looking for new opportunities in app and software development.
            Working in research and development has given me a strong communicative skill set as well as the ability to
            analyze problems effectively,using fundamental engineering principles. Utilizing my experience,
            I can learn and adapt to new changes in any fast-paced environment while also solving unique problems
            in the tech industry
          </p>
          <div id="skills-list">
            <h2 className="font-medium text-xl dark:text-white">SKILLS:</h2>
            <ul className="md:flex md:space-x-4 text-orange-300 font-bold text-small uppercase break-words">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>RUBY</li>
              <li>REACTJS</li>
              <li>RUBY ON RAILS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
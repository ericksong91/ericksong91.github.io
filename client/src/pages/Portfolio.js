import React from 'react';
import ProjectCard from '../cards/ProjectCard';

function Portfolio() {
  return (
    <div id="portfolio" className="py-28 dark:bg-slate-900">
    <div id="project-overview" className="flex flex-col gap-3 items-center">
        <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
        <h1 className="text-3xl dark:text-white">WORKS & PROJECTS</h1>
        <p className="w-1/2 text-center text-gray-400">
            Ipsem Lorem asdfiojaoibj sfgoibj sgoijs bsoifjgboisjg oisjgfboisjgb
            oisjgb boisjgb boijgb doifjvsodifjvsodiffjvoi sdofivjsodfjv oidfjvvoijsdfvo isjfvo
        </p>
    </div>
    <div id="service-cards" className="p-5 sm:p-0 flex flex-wrap justify-between">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
</div>
  );
};

export default Portfolio;
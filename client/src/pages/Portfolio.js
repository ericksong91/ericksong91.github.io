import React from 'react';
import ProjectCard from '../cards/ProjectCard';

function Portfolio() {
  return (
    <div id="portfolio" class="py-28">
    <div id="project-overview" class="flex flex-col gap-3 items-center">
        <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
        <h1 class="text-3xl">WORKS & PROJECTS</h1>
        <p class="w-1/2 text-center text-gray-400">
            Ipsem Lorem asdfiojaoibj sfgoibj sgoijs bsoifjgboisjg oisjgfboisjgb
            oisjgb boisjgb boijgb doifjvsodifjvsodiffjvoi sdofivjsodfjv oidfjvvoijsdfvo isjfvo
        </p>
    </div>
    <div id="service-cards" class="p-5 sm:p-0 flex flex-wrap justify-between">
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
import React from 'react';
import icon from '../img/placeholder_icon.png'

function ProjectCard() {
    // const projectName = "Project Name";
    // const description = "Short Description";

  return (
    <div id="project-card" class="w-full md:w-5/12 lg:w-1/5 lg:4/12 shadow-md rounded-lg p-5 my-3 md:my-10 m-1 flex flex-row justify-center">
        <img src={icon} alt="project"/>
    </div>
  )
};

export default ProjectCard;
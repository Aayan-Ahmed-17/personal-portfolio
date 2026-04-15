"use client";
import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'python', name: 'Python' },
    { id: 'vibe', name: 'Vibe' },
    { id: 'agentic-ai', name: 'Agentic AI' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-[#1a1443] border-[#16f2b3] text-[#16f2b3] shadow-[0_0_20px_rgba(22,242,179,0.3)]'
                  : 'bg-transparent border-[#1b2c68a0] text-gray-400 hover:border-[#16f2b3] hover:text-[#16f2b3]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {filteredProjects.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'Credit Union Youth Development Program',
    description: 'Expanded the customer base for farmers by building fruit sales website that connects farmers with local consumers, promoting sustainable agriculture and healthy eating.',
    image: '/Credit.png',
    technologies: ['HTML', 'CSS','Bootstrap4'],
    category: 'web',
    github: 'https://github.com/katydu/Farm-Website',
    demo: 'https://katydu.github.io/Farm-Website/index.html'
  }, {
    id: 2,
    title: 'Library Management System',
    description: 'A console application for library administration with OOP principles, allowing book borrowing, member management.',
    image: '/Library.png',
    technologies: ['C++', 'Object-Oriented Programming'],
    category: 'desktop',
    github: 'https://github.com/katydu/Library-Management-System-OOP'
  }, {
    id: 3,
    title: 'WolfJobs (NC State)',
    description: 'An application streamlining job opportunities for students at NC State University, connecting students with on-campus and local employment.',
    image: '/WolfJob.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'web',
    github: 'https://github.com/katydu/WolfJobs'
  }, {
    id: 4,
    title: 'SlackBot Enhancement',
    description: 'Enhanced Slackbot with NLP and AI for improved user interactions and automated responses.',
    image: '/slack.png',
    technologies: ['Python', 'Machine Learning', 'NLP'],
    category: 'ai',
    github: 'https://github.com/katydu/SlackBot-Enhancement'
  }, {
    id: 5,
    title: 'Galaxian Game',
    description: 'A classic arcade-style game recreation built with modern web technologies.',
    image: '/galaxian.png',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    category: 'web',
    github: 'https://github.com/katydu/Galaxian-Game'
  }, {
    id: 6,
    title: 'MariaDB Implementation',
    description: 'Database implementation and optimization project using MariaDB for large-scale data management.',
    image: '/mariadb.jpg',
    technologies: ['MariaDB', 'SQL', 'Database Design'],
    category: 'database',
    github: 'https://github.com/katydu/MariaDB-Project'
  }];
  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'AI',
    label: 'AI'
  }, {
    id: 'web',
    label: 'Web'
  }, {
    id: 'data-analytics',
    label: 'Data Analytics'
  },{
    id: 'database',
    label: 'Database'
  }, {
    id: 'contributions',
    label: 'Contributions'
  },{
    id: 'games',
    label: 'Games'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my technical skills
          and problem-solving abilities.
        </p>
        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full ${activeFilter === filter.id ? 'text-white bg-pink-400 dark:bg-pink-500' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'} transition-colors`}>
              {filter.label}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => <span key={tech} className="bg-pink-50 dark:bg-pink-900 px-2 py-1 rounded text-xs text-pink-600 dark:text-pink-300">
                      {tech}
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  {/*Check if demo link exists before rendering*/}
                  {project.demo && (
                  <a href={project.demo} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  )}
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-10">
          <a href="https://github.com/katydu?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-pink-500" style={{
          color: '#FAD'
        }}>
            <span>View more projects on GitHub</span>
            <ExternalLinkIcon size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
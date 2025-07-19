import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'Credit Union Youth Development Program',
    description: 'Expanded the customer base for farmers by building fruit sales website that connects farmers with local consumers, promoting sustainable agriculture and healthy eating.',
    image: './../../assets/Credit.png',
    technologies: ['Html', 'CSS','Bootstrap4'],
    category: 'web',
    github: 'https://github.com/katydu/Farm-Website',
    demo: 'https://katydu.github.io/Farm-Website/index.html'
  }, {
    id: 2,
    title: 'Library Management System',
    description: 'Built a scalable system for managing library operations, including adding new books, searching books and deleting books functionality.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Html', 'JavaScript', 'Local Storage', 'Kendo UI'],
    category: 'data-analytics',
    github: 'https://github.com/katydu/library-management-system',
    demo: 'https://katydu.github.io/library-management-system/'
  }, {
    id: 3,
    title: 'Smart Campus Mobile App',
    description: 'Created a mobile application that helps students navigate campus, find study spaces, and connect with peers.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    category: 'web',
    github: '#',
    demo: '#'
  }, {
    id: 4,
    title: 'Sentiment Analysis for Product Reviews',
    description: 'Implemented NLP models to analyze customer reviews and extract sentiment and key product insights.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Python', 'NLTK', 'BERT', 'Flask'],
    category: 'AI',
    github: '#',
    demo: '#'
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
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my technical skills
          and problem-solving abilities.
        </p>
        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full ${activeFilter === filter.id ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`} style={activeFilter === filter.id ? {
          backgroundColor: '#FAD'
        } : {}}>
              {filter.label}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => <span key={tech} className="bg-pink-50 px-2 py-1 rounded text-xs" style={{
                color: '#FAD'
              }}>
                      {tech}
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-700 hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center text-gray-700 hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-10">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-pink-500" style={{
          color: '#FAD'
        }}>
            <span>View more projects on GitHub</span>
            <ExternalLinkIcon size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>;
};
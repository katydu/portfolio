import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'Credit Union Youth Development Program',
    description: 'Expanded the customer base for farmers by building fruit sales website that connects farmers with local consumers, promoting sustainable agriculture and healthy eating.',
    image: './../../assets/Credit.png',
    technologies: ['HTML', 'CSS','Bootstrap4'],
    category: 'web',
    github: 'https://github.com/katydu/Farm-Website',
    demo: 'https://katydu.github.io/Farm-Website/index.html'
  }, {
    id: 2,
    title: 'Library Management System',
    description: 'Built a scalable system for managing library operations, including adding new books, searching books and deleting books functionality.',
    image: './../../assets/Library.png',
    technologies: ['HTML', 'JavaScript', 'Local Storage', 'Kendo UI'],
    category: 'web',
    github: 'https://github.com/katydu/library-management-system',
    demo: 'https://katydu.github.io/library-management-system/'
  }, {
    id: 3,
    title: 'WolfJobs - On Campus Job Finder',
    description: 'Enhanced the job platform with direct chat between applicants and recruiters, AI-driven question suggestions based on job descriptions, unique email validation for users, and a complete UI redesign for a sleeker, user-friendly experience.',
    image: './../../assets/WolfJob.png',
    technologies: ['React.js', 'Node.js', 'Express.js','MongoDB'],
    category: 'contributions',
    github: 'https://github.com/katydu/WolfJobs'
  }, {
    id: 4,
    title: 'Slack Point',
    description: 'Enhanced SlackPoint productivity platform with gamified task completion, automated point tracking, and competitive leaderboards integrated directly into Slack. Implemented advanced features including cross-team task assignment, Pomodoro timer integration for productivity optimization, and a pet raising gamification system that significantly improved user retention and team motivation.',
    image: './../../assets/slack.png',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Ngrok'],
    category: 'contributions',
    github: 'https://github.com/katydu/slackpoint-v4'
  },{
    id: 5,
    title: 'Galaxian',
    description: 'Developed a WebGL-based 3D space shooter game inspired by the classic arcade game Galaxian.',
    image: './../../assets/galaxian.png',
    technologies: ['WebGL', 'JavaScript', 'HTML','CSS'],
    category: 'games',
    github: 'https://github.com/katydu/Galaxian',
    demo: 'https://katydu.github.io/Galaxian/'
  },{
    id: 6,
    title: 'Warehouse Store Database Management System',
    description: 'Developed a database management system simulating operations of a warehouse club like Costco. Implemented with Java and JDBC to connect to a MariaDB database, featuring separate Java files for each operation (create, read, update, delete). Built a command-line main menu interface using Eclipse IDE to execute these operations interactively, resembling API calls for real-time database access.',
    image: './../../assets/mariadb.jpg',
    technologies: ['Java', 'JDBC', 'MariaDB'],
    category: 'database',
    github: 'https://github.com/katydu/Warehouse-Store-Database-Management-System'
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
                  {/*Check if demo link exists before rendering*/}
                  {project.demo && (
                  <a href={project.demo} className="flex items-center text-gray-700 hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
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
    </section>;
};
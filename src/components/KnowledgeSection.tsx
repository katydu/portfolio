import React, { useEffect, useState, useContext, Component } from 'react';
import { BookIcon, CodeIcon, BrainIcon, ServerIcon, DatabaseIcon } from 'lucide-react';
export const KnowledgeSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Knowledge',
    icon: <BookIcon size={20} />
  }, {
    id: 'frontend',
    name: 'Frontend',
    icon: <CodeIcon size={20} />
  }, {
    id: 'backend',
    name: 'Backend',
    icon: <ServerIcon size={20} />
  }, {
    id: 'ai',
    name: 'AI & ML',
    icon: <BrainIcon size={20} />
  }, {
    id: 'databases',
    name: 'Databases',
    icon: <DatabaseIcon size={20} />
  }];
  const knowledgeItems = [{
    id: 1,
    title: 'React Component Architecture',
    description: 'Learned how to structure React applications using functional components, hooks, and proper state management techniques.',
    category: 'frontend',
    keyPoints: ['Component composition and reusability', 'Proper use of React hooks (useState, useEffect, useContext)', 'Performance optimization techniques', 'State management patterns']
  }, {
    id: 2,
    title: 'Neural Network Fundamentals',
    description: 'Gained deep understanding of neural network architectures, backpropagation, and optimization algorithms.',
    category: 'ai',
    keyPoints: ['Forward and backward propagation', 'Gradient descent optimization', 'Activation functions and their use cases', 'Model evaluation and validation techniques']
  }, {
    id: 3,
    title: 'RESTful API Design',
    description: 'Mastered the principles of designing robust and scalable RESTful APIs with proper resource naming and status codes.',
    category: 'backend',
    keyPoints: ['Resource-oriented architecture', 'HTTP methods and status codes', 'Authentication and authorization strategies', 'API versioning and documentation']
  }, {
    id: 4,
    title: 'Database Schema Design',
    description: 'Learned effective database schema design patterns for both relational and NoSQL databases.',
    category: 'databases',
    keyPoints: ['Normalization and denormalization trade-offs', 'Indexing strategies for performance', 'Transaction management', 'Query optimization techniques']
  }, {
    id: 5,
    title: 'Responsive Web Design',
    description: 'Mastered techniques for creating responsive layouts that work across all device sizes using modern CSS.',
    category: 'frontend',
    keyPoints: ['Flexbox and CSS Grid layouts', 'Media queries and breakpoints', 'Mobile-first design approach', 'Responsive typography and images']
  }, {
    id: 6,
    title: 'Distributed Systems Concepts',
    description: 'Gained knowledge of distributed systems principles including consistency models, fault tolerance, and scalability patterns.',
    category: 'backend',
    keyPoints: ['CAP theorem and its implications', 'Consensus algorithms', 'Load balancing techniques', 'Microservices architecture patterns']
  }];
  const filteredItems = activeCategory === 'all' ? knowledgeItems : knowledgeItems.filter(item => item.category === activeCategory);
  return <section id="knowledge" className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Knowledge & Learnings
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Key concepts, technologies, and principles I've mastered throughout my
          coding journey.
        </p>
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-3">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center px-4 py-2 rounded-full transition-colors ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map(item => <div key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Key Learnings:
                </h4>
                <ul className="space-y-1">
                  {item.keyPoints.map((point, index) => <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>)}
                </ul>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {categories.find(cat => cat.id === item.category)?.name}
                </span>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Continuous learning is a core part of my development philosophy.
            <br />
            I'm constantly expanding my knowledge through projects, courses, and
            research.
          </p>
        </div>
      </div>
    </section>;
};
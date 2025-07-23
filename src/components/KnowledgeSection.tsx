import React, { useState } from 'react';
import { Book, Code, Brain, Server, Database, X } from 'lucide-react';

export const KnowledgeSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedKnowledge, setSelectedKnowledge] = useState(null);
  
  const categories = [{
    id: 'all',
    name: 'All Knowledge',
    icon: <Book size={20} />
  }, {
    id: 'frontend',
    name: 'Frontend',
    icon: <Code size={20} />
  }, {
    id: 'backend',
    name: 'Backend',
    icon: <Server size={20} />
  }, {
    id: 'ai',
    name: 'AI & ML',
    icon: <Brain size={20} />
  }, {
    id: 'databases',
    name: 'Databases',
    icon: <Database size={20} />
  }];

  const knowledgeItems = [{
    id: 1,
    title: 'Tsx vs Html',
    description: 'Learned how to structure React applications using functional components, hooks, and proper state management techniques.',
    category: 'frontend',
    keyPoints: ['Component composition and reusability', 'Proper use of React hooks (useState, useEffect, useContext)', 'Performance optimization techniques', 'State management patterns'],
    detailedContent: `## Deep Dive: TSX vs HTML

When I first encountered TSX, I was amazed by how it combined the familiarity of HTML with the power of JavaScript...

### Key Differences I Discovered

1. **Attribute Naming**: The switch from 'class' to 'className' was initially confusing but makes sense from a JavaScript perspective.

2. **Self-Closing Tags**: Every tag must be properly closed in TSX, which enforces better coding practices.

3. **JavaScript Integration**: The ability to embed expressions directly in markup revolutionized how I think about UI development.

### Real-World Applications

In my projects, I've found TSX particularly powerful for:
- Creating dynamic user interfaces
- Implementing conditional rendering
- Managing component state effectively
- Building reusable component libraries

### Challenges and Solutions

The biggest challenge was shifting from imperative DOM manipulation to declarative component thinking. This required understanding React's virtual DOM and component lifecycle.`,
    tags: ['React', 'TypeScript', 'JSX', 'HTML'],
    datelearned: '2025-01-15'
  }];

  const filteredItems = activeCategory === 'all' ? knowledgeItems : knowledgeItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedKnowledge(item);
  };

  const closeModal = () => {
    setSelectedKnowledge(null);
  };

  // Function to parse markdown content
  const parseMarkdownContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentList = null;
    let listItems = [];

    const flushCurrentList = () => {
      if (currentList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside mb-4 space-y-1 text-gray-600">
            {listItems}
          </ul>
        );
        listItems = [];
        currentList = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine === '') {
        flushCurrentList();
        return;
      }

      // Handle h2 headers
      if (trimmedLine.startsWith('## ')) {
        flushCurrentList();
        elements.push(
          <h2 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        return;
      }

      // Handle h3 headers
      if (trimmedLine.startsWith('### ')) {
        flushCurrentList();
        elements.push(
          <h3 key={index} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(trimmedLine)) {
        if (currentList !== 'ordered') {
          flushCurrentList();
          currentList = 'ordered';
        }
        const text = trimmedLine.replace(/^\d+\.\s/, '');
        // Handle bold text within list items
        const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        listItems.push(
          <li key={`${index}-${listItems.length}`} 
              dangerouslySetInnerHTML={{ __html: formattedText }} />
        );
        return;
      }

      // Handle bullet lists
      if (trimmedLine.startsWith('- ')) {
        if (currentList !== 'unordered') {
          flushCurrentList();
          currentList = 'unordered';
        }
        const text = trimmedLine.replace('- ', '');
        listItems.push(
          <li key={`${index}-${listItems.length}`}>
            {text}
          </li>
        );
        return;
      }

      // Handle regular paragraphs
      if (trimmedLine) {
        flushCurrentList();
        elements.push(
          <p key={index} className="text-gray-600 mb-3 leading-relaxed">
            {trimmedLine}
          </p>
        );
      }
    });

    // Flush any remaining list
    flushCurrentList();

    return elements;
  };

  return (
    <>
      <section id="knowledge" className="py-16 bg-white px-4">
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
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={activeCategory === category.id ? { backgroundColor: '#FAD' } : {}}
                >
                  <span className="mr-2">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 
                  className="text-xl font-semibold mb-3 text-gray-800 cursor-pointer hover:text-pink-400 transition-colors"
                  onClick={() => openModal(item)}
                >
                  {item.title} →
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Key Learnings:
                  </h4>
                  <ul className="space-y-1">
                    {item.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2" style={{ color: '#FAD' }}>
                          •
                        </span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span
                    className="inline-block bg-pink-100 px-3 py-1 rounded-full text-sm"
                    style={{ color: '#FAD' }}
                  >
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <button
                    onClick={() => openModal(item)}
                    className="text-sm text-pink-400 hover:text-pink-500"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedKnowledge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedKnowledge.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-4 text-sm text-gray-500">
                Learned on: {selectedKnowledge.datelearned}
              </div>
              
              <div className="prose max-w-none">
                {parseMarkdownContent(selectedKnowledge.detailedContent)}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedKnowledge.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-pink-100 text-pink-600 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KnowledgeSection;
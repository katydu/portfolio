import React from 'react';
import { BrainIcon, CodeIcon, UsersIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-gray-600 mb-4">
              I'm a Master's student in Computer Science at Stanford University,
              specializing in Machine Learning and Artificial Intelligence. With
              a strong foundation in algorithms, data structures, and software
              engineering, I'm passionate about developing intelligent systems
              that can make a positive impact.
            </p>
            <p className="text-gray-600 mb-4">
              My research focuses on developing efficient deep learning models
              for computer vision applications. I'm particularly interested in
              the intersection of AI and healthcare, where I believe technology
              can make significant contributions.
            </p>
            <p className="text-gray-600">
              When I'm not coding or researching, I enjoy participating in
              hackathons, contributing to open-source projects, and mentoring
              undergraduate students in programming.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BrainIcon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Research Focus
                </h3>
                <p className="text-gray-600">
                  Machine Learning, Computer Vision, Natural Language Processing
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CodeIcon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Development
                </h3>
                <p className="text-gray-600">
                  Full-stack development with focus on AI integration and
                  scalable systems
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg col-span-1 md:col-span-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <UsersIcon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  Strong team player with experience in agile environments and
                  cross-functional teams. Passionate about knowledge sharing and
                  mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
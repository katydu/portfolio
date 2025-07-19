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
              Master's student in Computer Science at NC State, specializing in Software Engineering and Cybersecurity 
              with a passion for developing intelligent systems
            </p>
            <p className="text-gray-600">
              Passionate about learning new technologies, contributing to open-source, and teaching programming
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-50 p-6 rounded-lg">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CodeIcon style={{
                  color: '#FAD'
                }} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Development
                </h3>
                <p className="text-gray-600">
                  Full-stack developer specializing in secure applications and
                  scalable systems.
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <UsersIcon style={{
                  color: '#FAD'
                }} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  Agile team player with leadership experience in cross-functional
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
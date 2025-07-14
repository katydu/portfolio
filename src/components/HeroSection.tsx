import React from 'react';
import { GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm Alex Chen
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            MSc Computer Science Student
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Specializing in machine learning and artificial intelligence.
            Passionate about solving complex problems through innovative
            software solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FileTextIcon size={24} />
              <span className="ml-1">Resume</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Alex Chen" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
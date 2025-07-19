import React from 'react';
import { GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm Min-Ting Tu
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{
          color: '#FAD'
        }}>
            Master of Computer Science Student
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Specializing in software engineering and cybersecurity.
            Passionate about learning new technologies and solving complex problems through innovative
            software solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="text-white px-6 py-3 rounded-md hover:bg-pink-400 transition-colors" style={{
            backgroundColor: '#FAD'
          }}>
              Contact Me
            </a>
            <a href="#projects" className="border px-6 py-3 rounded-md hover:bg-pink-50 transition-colors" style={{
            borderColor: '#FAD',
            color: '#FAD'
          }}>
              View Projects
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a href="https://github.com/katydu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/min-ting-tu-68491b20b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://drive.google.com/file/d/12pl1mHKojK9woDDUAXCxtXsxCNxFsnve/view?usp=sharing" className="text-gray-600 hover:text-pink-500 transition-colors">
              <FileTextIcon size={24} />
              <span className="ml-1">Resume</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src="/assets/myphoto.jpg" alt="Min-Ting Tu" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
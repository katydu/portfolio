import React, { useEffect, useRef, useState } from 'react';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const technicalSkills = [{
    name: 'Python',
    level: 85
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'SQL',
    level: 80
  }, {
    name: 'Docker',
    level: 75
  }, {
    name: 'React.js',
    level: 70
  }, {
    name: 'Typescript',
    level: 70
  }, {
    name: 'C/C++',
    level: 65
  }, {
    name: 'Node.js',
    level: 60
  }];
  const softSkills = ['Problem Solving', 'Technical Writing', 'Team Leadership', 'Project Management', 'Public Speaking', 'Data Analysis', 'Critical Thinking'];
  return (
    <section ref={sectionRef} id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => <div key={skill.name} className="skill-bar">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-pink-400 dark:bg-pink-500 skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => <span key={skill} className="bg-pink-100 dark:bg-pink-900 px-3 py-1 rounded-full text-sm text-pink-600 dark:text-pink-300">
                  {skill}
                </span>)}
            </div>
            <div className="mt-8 bg-pink-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Certifications
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Certified Information Security Engineer - Associate Level</li>
                {/* <li>• AWS Certified Machine Learning – Specialty</li>
                <li>• Microsoft Certified: Azure AI Engineer Associate</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
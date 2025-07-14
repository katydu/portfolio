import React from 'react';
export const SkillsSection = () => {
  const technicalSkills = [{
    name: 'Python',
    level: 90
  }, {
    name: 'TensorFlow/PyTorch',
    level: 85
  }, {
    name: 'JavaScript/TypeScript',
    level: 80
  }, {
    name: 'React',
    level: 75
  }, {
    name: 'Java',
    level: 70
  }, {
    name: 'SQL/NoSQL',
    level: 75
  }, {
    name: 'C/C++',
    level: 65
  }, {
    name: 'Docker',
    level: 60
  }];
  const softSkills = ['Problem Solving', 'Research', 'Technical Writing', 'Team Leadership', 'Project Management', 'Public Speaking', 'Data Analysis', 'Critical Thinking'];
  return <section id="skills" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Skills & Expertise
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>)}
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Certifications
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Google TensorFlow Developer Certificate</li>
                <li>• AWS Certified Machine Learning – Specialty</li>
                <li>• Microsoft Certified: Azure AI Engineer Associate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
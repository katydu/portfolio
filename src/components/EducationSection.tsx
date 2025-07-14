import React from 'react';
import { BookOpenIcon, BriefcaseIcon } from 'lucide-react';
export const EducationSection = () => {
  const education = [{
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    duration: '2022 - Present',
    description: 'Specializing in Machine Learning and Artificial Intelligence. Current GPA: 3.9/4.0',
    courses: ['Advanced Machine Learning', 'Deep Learning for Computer Vision', 'Natural Language Processing', 'Distributed Systems']
  }, {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    duration: '2018 - 2022',
    description: 'Graduated with Honors. GPA: 3.8/4.0',
    courses: ['Data Structures and Algorithms', 'Operating Systems', 'Database Management', 'Software Engineering']
  }];
  const experience = [{
    position: 'Machine Learning Research Intern',
    company: 'Google AI',
    duration: 'Summer 2023',
    description: 'Worked on improving efficiency of large language models through quantization techniques.',
    achievements: ['Reduced model size by 40% while maintaining 98% of performance', 'Developed novel pruning algorithm that was included in research paper', 'Collaborated with team of 5 researchers on state-of-the-art NLP models']
  }, {
    position: 'Software Engineering Intern',
    company: 'Microsoft',
    duration: 'Summer 2022',
    description: 'Developed features for Azure Machine Learning platform.',
    achievements: ['Implemented dashboard for monitoring model training metrics', 'Created API endpoints for automated model deployment', 'Fixed critical bugs improving platform stability']
  }];
  return <section id="education" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Education & Experience
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <BookOpenIcon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Education
              </h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => <div key={index} className="relative pl-6 border-l-2 border-blue-200 pb-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.degree}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 mb-2">{item.duration}</p>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">
                      Key Courses:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {item.courses.map((course, i) => <li key={i} className="text-gray-600 text-sm">
                          • {course}
                        </li>)}
                    </ul>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <BriefcaseIcon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Experience
              </h3>
            </div>
            <div className="space-y-8">
              {experience.map((item, index) => <div key={index} className="relative pl-6 border-l-2 border-blue-200 pb-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.position}
                  </h4>
                  <p className="text-blue-600 font-medium">{item.company}</p>
                  <p className="text-gray-500 mb-2">{item.duration}</p>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">
                      Key Achievements:
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => <li key={i} className="text-gray-600 text-sm">
                          • {achievement}
                        </li>)}
                    </ul>
                  </div>
                </div>)}
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  Academic Achievements
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dean's List (All Semesters)</li>
                  <li>• Best Undergraduate Research Award (2022)</li>
                  <li>• ACM Programming Contest Finalist</li>
                  <li>• Grace Hopper Conference Scholarship Recipient</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
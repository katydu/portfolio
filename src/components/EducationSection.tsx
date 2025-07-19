import React from 'react';
import { BookOpenIcon, BriefcaseIcon } from 'lucide-react';
export const EducationSection = () => {
  const education = [{
    degree: 'Master of Computer Science',
    institution: 'NC State University',
    duration: '2024 - Present',
    description: 'Specializing in Software Engineering and Cybersecurity. Current GPA: 3.7/4.0',
    courses: ['Algorithms', 'Software Engineering', 'Database Management System', 'Software Security']
  }, {
    degree: 'Bachelor in Information Management',
    institution: 'Yuan Ze University',
    duration: '2018 - 2022',
    description: 'Graduated with Honors. GPA: 3.76/4.0',
    courses: ['Data Structures and Algorithms', 'Operating Systems', 'Programming C++', 'Web Development']
  }];
  const experience = [{
    position: 'Management Information System Intern',
    company: 'YS-infoware Inc.',
    duration: 'Jan.2024 – June.2024',
    description: 'Maintained network infrastructure for 70+ form systems across 6 servers while developing custom JavaScript-SQL solutions to meet client reporting and functionality requirements.',
    achievements: ['Managed enterprise network infrastructure, ensuring zero critical downtime', 'Maintained 99%+ uptime across 70 form systems by proactively monitoring and optimizing 6 server hosts', 'Successfully delivered 100% of client-requested custom reports and form functionalities using JavaScript and SQL integration']
  }, {
    position: 'Cybersecurity Intern',
    company: 'Galaxy Software Services, Inc',
    duration: 'Jan. 2021-Dec. 2022',
    description: 'Developed automated security testing solutions using Selenium, Jenkins, and Python while leading technical training for 30+ interns. Built secure library management system with ASP.NET MVC framework and provided expert analysis and remediation of security vulnerabilities for multiple client systems.',
    achievements: ['Automated testing processes using Selenium, Jenkins, and Python to streamline client security assessments', 'Provided direct client support for security vulnerability remediation across multiple systems', 'Led training program for 30+ interns, developing course materials and mentoring on library management system development']
  }];
  return <section id="education" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Education & Experience
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-2 rounded-full mr-3">
                <BookOpenIcon style={{
                color: '#FAD'
              }} size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Education
              </h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => <div key={index} className="relative pl-6 border-l-2 pb-8" style={{
              borderColor: '#FAD'
            }}>
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full" style={{
                backgroundColor: '#FAD'
              }}></div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.degree}
                  </h4>
                  <p className="font-medium" style={{
                color: '#FAD'
              }}>
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
              <div className="bg-pink-100 p-2 rounded-full mr-3">
                <BriefcaseIcon style={{
                color: '#FAD'
              }} size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Experience
              </h3>
            </div>
            <div className="space-y-8">
              {experience.map((item, index) => <div key={index} className="relative pl-6 border-l-2 pb-8" style={{
              borderColor: '#FAD'
            }}>
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full" style={{
                backgroundColor: '#FAD'
              }}></div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.position}
                  </h4>
                  <p className="font-medium" style={{
                color: '#FAD'
              }}>
                    {item.company}
                  </p>
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
              <div className="bg-pink-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  Academic Achievements
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Yuan Ze Academic Silver Award</li>
                  <li>• Silver Prize by Galaxy Software Services Summer Chatbot Hackathon</li>
                  <li>• Third Prize by Electronic System Creative Application Competition</li>
                  <li>• Second Prize by Systematic Innovation Thesis Seminar and Project Competition</li>
                  <li>• First Prize by Intelligent Manufacturing and Big Data Talent Development Nov. 2020
                        Industry Academia Collaboration Project
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
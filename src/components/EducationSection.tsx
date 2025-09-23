import React, { useEffect, useRef } from 'react';
import { BookOpenIcon, BriefcaseIcon } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, flowInAnimation, mouseResponsiveScrollTrigger, cardCascadeAnimation, hoverScaleAnimation, parallaxAnimation } from '../utils/animations';

export const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const educationContainerRef = useRef<HTMLDivElement>(null);
  const experienceContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      // Animate title with mouse-responsive scroll
      mouseResponsiveScrollTrigger(titleRef.current, fadeInUp, {
        duration: 0.8,
        start: "top 85%",
        onEnterBack: true
      });
    }
  }, []);

  useEffect(() => {
    if (educationContainerRef.current) {
      const educationCards = educationContainerRef.current.querySelectorAll('.education-card');
      if (educationCards.length > 0) {
        // Cascade animation for education cards flowing from left
        mouseResponsiveScrollTrigger(educationContainerRef.current, () => {
          educationCards.forEach((card, index) => {
            flowInAnimation(card, {
              duration: 1.0 + index * 0.2,
              delay: index * 0.3,
              distance: 80
            });
          });
        }, {
          start: "top 75%"
        });

        // Add hover effects
        educationCards.forEach((card) => {
          hoverScaleAnimation(card, { scale: 1.05 });
        });
      }
    }
  }, []);

  useEffect(() => {
    if (experienceContainerRef.current) {
      const experienceCards = experienceContainerRef.current.querySelectorAll('.experience-card');
      if (experienceCards.length > 0) {
        // Cascade animation for experience cards flowing from right
        mouseResponsiveScrollTrigger(experienceContainerRef.current, () => {
          experienceCards.forEach((card, index) => {
            fadeInRight(card, {
              duration: 1.0 + index * 0.2,
              delay: index * 0.4,
              distance: 100
            });
          });
        }, {
          start: "top 70%"
        });

        // Add hover effects and parallax
        experienceCards.forEach((card) => {
          hoverScaleAnimation(card, { scale: 1.05 });
          parallaxAnimation(card, { yPercent: -20, scrub: 1 });
        });
      }
    }
  }, []);
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
  return (
    <section ref={sectionRef} id="education" className="py-16 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Education & Experience
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded-full mr-3">
                <BookOpenIcon className="text-pink-400 dark:text-pink-300" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Education
              </h3>
            </div>
            <div ref={educationContainerRef} className="space-y-8">
              {education.map((item, index) => <div key={index} className="education-card relative pl-6 border-l-2 border-pink-400 dark:border-pink-500 pb-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-pink-400 dark:bg-pink-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.degree}
                  </h4>
                  <p className="font-medium text-pink-400 dark:text-pink-300">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{item.duration}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                      Key Courses:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {item.courses.map((course, i) => <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                          • {course}
                        </li>)}
                    </ul>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded-full mr-3">
                <BriefcaseIcon className="text-pink-400 dark:text-pink-300" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Experience
              </h3>
            </div>
            <div ref={experienceContainerRef} className="space-y-8">
              {experience.map((item, index) => <div key={index} className="experience-card relative pl-6 border-l-2 border-pink-400 dark:border-pink-500 pb-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-pink-400 dark:bg-pink-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.position}
                  </h4>
                  <p className="font-medium text-pink-400 dark:text-pink-300">
                    {item.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{item.duration}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                      Key Achievements:
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                          • {achievement}
                        </li>)}
                    </ul>
                  </div>
                </div>)}
              <div className="bg-pink-50 dark:bg-gray-700 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  Academic Achievements
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
    </section>
  );
};
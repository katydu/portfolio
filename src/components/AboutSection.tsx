import React, { useEffect, useRef } from 'react';
import { CodeIcon, UsersIcon } from 'lucide-react';
import { fadeInUp, fadeInLeft, flowInAnimation, cardCascadeAnimation, mouseResponsiveScrollTrigger, hoverScaleAnimation, floatingAnimation } from '../utils/animations';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && titleRef.current && contentRef.current) {
      // Animate title and content
      mouseResponsiveScrollTrigger(titleRef.current, fadeInUp, { 
        duration: 0.8, 
        start: "top 85%",
        onEnterBack: true 
      });
      
      mouseResponsiveScrollTrigger(contentRef.current, fadeInLeft, { 
        duration: 0.8, 
        delay: 0.2,
        start: "top 85%" 
      });
    }
  }, []);

  useEffect(() => {
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll('.about-card');
      if (cards.length > 0) {
        // Add flowing cascade animation for cards
        mouseResponsiveScrollTrigger(cardsContainerRef.current, () => {
          cardCascadeAnimation(Array.from(cards) as Element[], {
            cascadeDelay: 0.3,
            duration: 1.2
          });
        }, {
          start: "top 75%"
        });

        // Add hover effects and floating animations to each card
        cards.forEach((card) => {
          hoverScaleAnimation(card, { scale: 1.08 });
          floatingAnimation(card, { 
            duration: 3 + Math.random() * 2, // Random duration between 3-5s
            delay: Math.random() * 2 // Random delay up to 2s
          });
        });
      }
    }
  }, []);
  return (
    <section ref={sectionRef} id="about" className="py-16 bg-white dark:bg-gray-800 px-4">
      <div className="container mx-auto">
        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Me
        </h2>
        <div ref={contentRef} className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Master's student in Computer Science at NC State, specializing in Software Engineering and Cybersecurity 
              with a passion for developing intelligent systems
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about learning new technologies, contributing to open-source, and teaching programming
            </p>
          </div>
          <div className="md:w-1/2">
            <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="about-card bg-pink-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="bg-pink-100 dark:bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CodeIcon className="text-pink-400 dark:text-pink-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack developer specializing in secure applications and
                  scalable systems.
                </p>
              </div>
              <div className="about-card bg-pink-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="bg-pink-100 dark:bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <UsersIcon className="text-pink-400 dark:text-pink-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Collaboration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Agile team player with leadership experience in cross-functional
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-sans bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <KnowledgeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}
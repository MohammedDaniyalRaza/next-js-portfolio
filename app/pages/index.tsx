
import React from 'react';
import HeroSection from '../components/Herosection';
import ProjectSection from '../components/Project';
import Skills from '../components/Skills';
import ContactForm from '../components/Contact';



const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <ProjectSection/>
      <Skills/>
      <ContactForm/>
    </>
  );
};

export default HomePage;

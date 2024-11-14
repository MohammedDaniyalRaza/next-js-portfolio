import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="py-12 bg-gray-100" id="skills">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Skill Card Component */}
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:scale-105 transform transition duration-300">
              <skill.icon className={`text-${skill.color} text-5xl mb-4 animate-pulse`} />
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skill data for easy configuration
const skillsData = [
  { name: 'HTML5', icon: FaHtml5, color: 'orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'teal-400' },
  { name: 'JavaScript', icon: FaJs, color: 'yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'blue-400' },
  { name: 'React', icon: FaReact, color: 'blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'gray-900' },
  { name: 'Node.js', icon: FaNodeJs, color: 'green-500' },
];

export default Skills;

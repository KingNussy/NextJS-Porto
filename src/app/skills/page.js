import React from 'react';
import { SiLaravel, SiHtml5, SiCss3, SiJavascript, SiMysql} from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const skills = [
  { name: 'Laravel', icon: <SiLaravel className="w-10 h-10 md:w-12 md:h-12 text-red-500" /> },
  { name: 'HTML', icon: <SiHtml5 className="w-10 h-10 md:w-12 md:h-12 text-orange-500" /> },
  { name: 'CSS', icon: <SiCss3 className="w-10 h-10 md:w-12 md:h-12 text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" /> },
  { name: 'MySQL', icon: <SiMysql className="w-10 h-10 md:w-12 md:h-12 text-blue-800" /> },
];

const skull = [
    { name: 'GoLang', icon: <FaGolang className="w-10 h-10 md:w-12 md:h-12 text-blue-400" /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql className="w-10 h-10 md:w-12 md:h-12 text-blue-900" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 pl-70 pr-70">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Keahlian
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Berikut adalah beberapa teknologi yang saya kuasai dan sering saya gunakan dalam membangun proyek.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div id="skull" className="container mx-auto px-4 text-center mt-30">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Keahlian yang ingin diperdalam
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
         Berikut adalah teknologi yang ingin saya kuasai dalam beberapa waktu ke depan
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skull.map((skull, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">
                {skull.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skull.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
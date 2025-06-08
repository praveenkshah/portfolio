/*
 * Copyright 2025 Praveen Kumar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/app/config/experience';
import { isMinimal } from '@/app/utils';

const Experience: React.FC = () => {
  const sectionVariants = isMinimal
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={isMinimal ? {} : { opacity: 0, y: 20 }}
          whileInView={isMinimal ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Experience
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            As a backend engineer, I specialize in building robust and scalable systems. Here&apos;s
            a glimpse of my professional journey.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={sectionVariants.initial}
              whileInView={sectionVariants.animate}
              transition={isMinimal ? {} : { duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <p className="text-gray-400 mb-4">{exp.location}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* REMOVED EDUCATION SECTION */}
      </div>
    </section>
  );
};

export default Experience;

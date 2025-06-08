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
import { Github } from 'lucide-react';
import { portfolioConfig } from '@/app/config';
import { isMinimal } from '@/app/utils';

const Projects: React.FC = () => {
  const config = portfolioConfig.sections.projects;

  const sectionVariants = isMinimal
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={isMinimal ? {} : { opacity: 0, y: 20 }}
          whileInView={isMinimal ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            {config.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {config.subtitle}
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto font-sans">{config.description}</p>
        </motion.div>

        <div className="space-y-12">
          {config.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={sectionVariants.initial}
              whileInView={sectionVariants.animate}
              transition={isMinimal ? {} : { duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 font-heading">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 font-sans">{project.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      <Github size={20} className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {config.viewMoreButton && (
          <motion.div
            className="text-center mt-12"
            initial={isMinimal ? {} : { opacity: 0, y: 20 }}
            whileInView={isMinimal ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={config.viewMoreButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
            >
              {config.viewMoreButton.label}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

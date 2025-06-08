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

import { PortfolioConfig } from '@/app/types/config';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

/**
 * Default portfolio configuration
 * Edit this file to customize your portfolio
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Praveen Kumar',
    description: 'Portfolio website by Praveen',
    author: 'Praveen Kumar',
  },

  navigation: {
    logo: {
      text: 'PKS',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'experience', label: 'Experience' },
      { href: 'skills', label: 'Skills' },
      { href: 'projects', label: 'Projects' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hey, I'm",
      name: 'Praveen',
      typingTexts: ['Building scalable systems', 'Optimizing performance', 'Designing robust APIs'],
      description:
        "I'm passionate about building robust backend systems and exploring new technologies that enhance system performance and scalability. My focus is on creating efficient, maintainable solutions that can handle complex business requirements while maintaining high performance standards.",
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "Hi, I'm a Backend Engineer based in Bangalore with a strong focus on building scalable, high-performance systems. I specialize in designing resilient backend architectures and crafting efficient solutions that drive modern digital experiences.",
        "With over 3 years of hands-on experience, I've worked extensively with Golang, Python, MySQL, Elasticsearch, and cloud platforms like AWS and GCP. My core interests lie in system design, performance tuning, and writing clean, maintainable code that scales.",
        "Beyond coding, I'm deeply curious about emerging technologies. I enjoy contributing to open-source projects, experimenting with AI-assisted development tools, and actively engaging with the developer community. This portfolio itself reflects my enthusiasm for innovation—built using modern AI technologies to bring my work to life.",
      ],
      details: [
        { label: 'Location', value: 'Based in Bangalore' },
        { label: 'Experience', value: '3+ Years Experience' },
        { label: 'Specialization', value: 'Backend Engineering' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'System Architect',
          description:
            'Building resilient backend systems that scale efficiently to handle complex business logic without compromising performance.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            "Developing clean, organized code that's easy to maintain and follows established industry patterns.",
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Problem Solver',
          description:
            'Breaking down complex technical challenges into manageable components through systematic analysis and strategic thinking.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'Performance Optimizer',
          description:
            'Optimizing system performance and scalability to handle increasing workloads while maintaining efficiency.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'Projects',
      subtitle: 'Showcase',
      description:
        'Explore my backend engineering projects that demonstrate expertise in building scalable systems, optimizing performance, and implementing robust solutions.',
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/praveenkshah',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      description:
        "Let's collaborate on exciting projects or discuss tech innovations. I'm always open to new opportunities and interesting conversations.",
      email: 'praveenkshah16@gmail.com',
      social: [
        {
          name: 'GitHub',
          url: 'https://github.com/praveenkshah',
          icon: 'github',
          color: '#333333',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/praveen-kumar-069532/',
          icon: 'linkedin',
          color: '#0077B5',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/praveenshah.kumar/?hl=en',
          icon: 'instagram',
          color: '#E4405F',
        },
      ],
    },
  },

  footer: {
    text: '© 2025 Praveen Kumar | Building scalable backend systems with passion and precision',
  },
};

export default portfolioConfig;

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

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'URL Shortener',
    description:
      'A robust URL shortener offering secure user authentication, customizable short links, and real-time analytics tracking. Features include link expiration, click statistics, and a clean REST API.',
    tags: ['Java', 'MySQL'],
    githubLink: 'https://github.com/praveenkshah/shortly',
    type: 'Backend',
  },
  {
    id: 2,
    title: 'Choti Parchi',
    description:
      "Winner of Ekathon 2025 - A WhatsApp-based voice prescription system that converts doctors' voice notes into digital prescriptions. Features real-time transcription, secure authentication, and automated PDF generation.",
    tags: ['Python', 'FastAPI', 'AWS'],
    type: 'AI/ML',
  },
];

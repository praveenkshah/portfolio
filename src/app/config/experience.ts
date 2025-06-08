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

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer I',
    company: 'EkaCare',
    location: 'Bangalore, India',
    startDate: 'July 2023',
    endDate: 'Present',
    description: [
      'Exposed APIs for partners (Samsung & Medanta) to integrate with ABHA services handling daily 20K active users. Authored and maintained public developer documentation at developer.eka.care',
      'Opensourced Eka MCP servers to enhance the medication context efficiency upto 92% for LLMs',
      'Integrated ABHA APIs to enable seamless care context linking and health record retrieval from any HIP/HIU, processing 8K+ ABHA cards daily',
      'Improved step trends page load time by 75% (from 7–8s to 1–2s), significantly improving user experience',
      'Developed a scalable leaderboard for tracking step counts, optimizing ingestion for 10K+ requests/minute',
      'Integrated APIs from 1mg and Medpay to facilitate medicine ordering and manage post-order flows',
      'Automated ingestion of new drugs/OTCs from vendors, replacing manual ingestion (1.5L initial load + 2K/month additions)',
    ],
    technologies: ['Python', 'Golang', 'Elasticsearch', 'MySQL', 'AWS'],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'KooApp',
    location: 'Bangalore, India',
    startDate: 'July 2022',
    endDate: 'June 2023',
    description: [
      'Migrated media upload service from AWS to GCP, integrating GCS SDKs for upload, delete, copy, ACL, and signed URL functionality',
      'Built analytics services for media uploads, ad consumption, rewards, and premium features; handled 25M+ events/day and 15K+ RPM',
      'Implemented event-driven profile view analytics handling 2K requests per minutes',
      'Developed multiple Apache Flink pipelines for ML-based content moderation and categorization—image extraction (120 img/sec), NSFW, fake news, toxicity, face recognition',
      'Improved OTP delivery by analyzing recent vendor performance, improving overall performace from 96% to 99%',
    ],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'MySQL', 'AWS', 'GCP'],
  },
];

export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  date: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 'hemohub',
    number: '01',
    name: 'HemoHub',
    tagline: 'Online Blood Bank System',
    date: 'February 2026',
    category: 'Full-Stack • Cloud',
    description:
      'A full-stack blood bank management system designed to connect donors, hospitals, and patients through a unified digital platform.',
    problem:
      'Coordinating blood availability between donors, hospitals, and patients is a fragmented, manual process. Hospitals struggle to track blood inventory in real time, and donors lack a structured way to register and be matched to requests.',
    solution:
      'HemoHub provides a centralized digital platform with dedicated workflows for donor registration, blood inventory tracking, and request management. The REST API backend enables clean data exchange between frontend and database layers, while AWS hosting ensures reliable availability.',
    features: [
      'Donor registration and profile management',
      'Blood group availability tracking',
      'Blood request management workflow',
      'REST API backend with Spring Boot',
      'React.js frontend interface',
      'MySQL database for structured data storage',
      'AWS cloud deployment',
    ],
    tech: ['React.js', 'Spring Boot', 'MySQL', 'REST API', 'AWS'],
    githubUrl: undefined,
    liveUrl: undefined,
    slug: 'hemohub',
  },
  {
    id: 'disaster-management',
    number: '02',
    name: 'Disaster Management System',
    tagline: 'Incident Reporting & Emergency Response Platform',
    date: 'May 2025',
    category: 'Full-Stack',
    description:
      'A disaster management platform built for structured incident reporting, role-based access control, and emergency resource coordination.',
    problem:
      'Disaster response teams need a reliable, organized system to report incidents, manage resources, and coordinate personnel — without relying on ad-hoc communication channels that can fail under pressure.',
    solution:
      'A structured web application providing secure authentication, role-based access for different user types, and dedicated modules for disaster records, emergency resources, and user management. Built with a Spring Boot REST API and React.js frontend with MySQL persistence.',
    features: [
      'Secure user authentication',
      'Role-based access control',
      'Disaster record creation and management',
      'Emergency resource tracking',
      'User information management',
      'REST API with Spring Boot',
      'React.js frontend',
      'MySQL database',
      'Version control with Git and GitHub',
    ],
    tech: ['React.js', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'GitHub'],
    githubUrl: undefined,
    liveUrl: undefined,
    slug: 'disaster-management',
  },
];

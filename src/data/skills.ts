export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    id: 'cs-fundamentals',
    title: 'Core Computer Science',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React.js'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Spring Boot', 'REST APIs'],
  },
  {
    id: 'database',
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    skills: [
      'Amazon Web Services',
      'Google Cloud Platform',
      'Microsoft Azure',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub'],
  },
];

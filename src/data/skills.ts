export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'PROGRAMMING',
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    id: 'core-cs',
    title: 'CORE CS',
    skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  },
  {
    id: 'development',
    title: 'DEVELOPMENT',
    skills: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL'],
  },
  {
    id: 'cloud',
    title: 'CLOUD',
    skills: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    id: 'tools',
    title: 'TOOLS',
    skills: ['Git', 'GitHub'],
  },
];

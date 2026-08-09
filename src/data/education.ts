export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  location: string;
  status: 'current' | 'completed';
  highlights?: string[];
}

export const education: Education[] = [
  {
    id: 'klu',
    institution: 'Koneru Lakshmaiah University',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – Present',
    score: '9.45 / 10',
    scoreLabel: 'CGPA',
    location: 'Vijayawada, Andhra Pradesh',
    status: 'current',
    highlights: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    id: 'sri-chaitanya',
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate — MPC (Mathematics, Physics, Chemistry)',
    period: '2021 – 2023',
    score: '932 / 1000',
    scoreLabel: 'Marks',
    location: 'Eluru, Andhra Pradesh',
    status: 'completed',
  },
  {
    id: 'sk-school',
    institution: 'S.K The School of Knowledge',
    degree: 'Secondary School Certificate (SSC)',
    period: '2020 – 2021',
    location: 'Eluru, Andhra Pradesh',
    status: 'completed',
  },
];

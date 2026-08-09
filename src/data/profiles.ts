export interface Profile {
  id: string;
  platform: string;
  username: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

export const profiles: Profile[] = [
  {
    id: 'github',
    platform: 'GitHub',
    username: 'Dheeraj1575',
    description: 'Source code, projects, and contributions',
    url: 'https://github.com/Dheeraj1575',
    icon: 'github',
    color: '#f0f0f5',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    username: 'dheeraj-margani',
    description: 'Professional profile and connections',
    url: 'https://www.linkedin.com/in/dheeraj-margani/',
    icon: 'linkedin',
    color: '#0A66C2',
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'dheeraj_margani',
    description: 'Algorithmic problem solving',
    url: 'https://leetcode.com/u/dheeraj_margani/',
    icon: 'code',
    color: '#FFA116',
  },
  {
    id: 'codechef',
    platform: 'CodeChef',
    username: 'klu_2300031575',
    description: 'Competitive programming',
    url: 'https://www.codechef.com/users/klu_2300031575',
    icon: 'chef',
    color: '#5B4638',
  },
  {
    id: 'hackerrank',
    platform: 'HackerRank',
    username: 'h2300031575',
    description: 'Skills certification and practice',
    url: 'https://www.hackerrank.com/profile/h2300031575',
    icon: 'terminal',
    color: '#2EC866',
  },
];

export interface Certification {
  id: string;
  provider: string;
  providerShort: string;
  name: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  verifyUrl: string;
  group: string;
  accentColor: string;
}

export const certificationGroups = [
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Professional cloud certifications across major platforms',
  },
  {
    id: 'development',
    title: 'Development & Data',
    description: 'Database and software development credentials',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Artificial intelligence and automation platform certifications',
  },
  {
    id: 'academic',
    title: 'Academic & Learning',
    description: 'Recognized academic achievement credentials',
  },
];

export const certifications: Certification[] = [
  {
    id: 'aws-saa',
    provider: 'Amazon Web Services',
    providerShort: 'AWS',
    name: 'AWS Certified Solutions Architect – Associate',
    issued: 'April 24, 2026',
    expires: 'April 24, 2029',
    credentialId: 'eea6ce609cb44ef0b9c7e9312ce946aa',
    verifyUrl: 'https://aws.amazon.com/verification',
    group: 'cloud',
    accentColor: '#FF9900',
  },
  {
    id: 'aws-clf',
    provider: 'Amazon Web Services',
    providerShort: 'AWS',
    name: 'AWS Certified Cloud Practitioner',
    issued: 'April 22, 2026',
    expires: 'April 22, 2029',
    credentialId: 'e46c9884fa85429b8a42f1c1d6c8a4f9',
    verifyUrl: 'https://aws.amazon.com/verification',
    group: 'cloud',
    accentColor: '#FF9900',
  },
  {
    id: 'azure-fundamentals',
    provider: 'Microsoft',
    providerShort: 'Microsoft',
    name: 'Microsoft Certified: Azure Fundamentals',
    issued: 'June 27, 2026',
    credentialId: '4789AC70A5418AB4',
    verifyUrl:
      'https://learn.microsoft.com/en-us/users/marganidheerajnagasaisubhash-3523/credentials/certification/azure-fundamentals',
    group: 'cloud',
    accentColor: '#0078D4',
  },
  {
    id: 'aviatrix',
    provider: 'Aviatrix',
    providerShort: 'Aviatrix',
    name: 'Aviatrix Certified Engineer – Multicloud Network Associate',
    issued: 'September 13, 2025',
    expires: 'September 13, 2028',
    credentialId: 'ACE ID: 2025-26780',
    verifyUrl: 'https://aviatrix.com',
    group: 'cloud',
    accentColor: '#00A86B',
  },
  {
    id: 'mongodb',
    provider: 'MongoDB',
    providerShort: 'MongoDB',
    name: 'MongoDB Associate Developer',
    issued: 'March 9, 2026',
    verifyUrl: 'https://www.credly.com/go/yvzKmT3G',
    group: 'development',
    accentColor: '#00ED64',
  },
  {
    id: 'salesforce-ai',
    provider: 'Salesforce',
    providerShort: 'Salesforce',
    name: 'Salesforce Certified AI Associate',
    issued: 'October 31, 2024',
    credentialId: '5165459',
    verifyUrl: 'https://sforce.co/verifycerts',
    group: 'ai-automation',
    accentColor: '#00A1E0',
  },
  {
    id: 'automation-anywhere',
    provider: 'Automation Anywhere',
    providerShort: 'AA',
    name: 'Certified Advanced Automation Professional',
    issued: 'June 12, 2026',
    expires: 'June 12, 2028',
    credentialId: 'AAADVC2024A360 - 185158101',
    verifyUrl: 'https://www.automationanywhere.com',
    group: 'ai-automation',
    accentColor: '#8B5CF6',
  },
  {
    id: 'nptel-cloud',
    provider: 'NPTEL',
    providerShort: 'NPTEL',
    name: 'Cloud Computing — Elite',
    issued: 'Jul – Oct 2025',
    credentialId: 'Score: 68% | Duration: 12 weeks',
    verifyUrl: 'https://nptel.ac.in',
    group: 'academic',
    accentColor: '#F59E0B',
  },
];

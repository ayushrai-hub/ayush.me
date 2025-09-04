export type Project = {
  name: string;
  description: string;
  link: string;
  category: 'AI/ML' | 'Web' | 'Data' | 'Other';
};

export const projects: Project[] = [
  {
    name: 'Shiksha-Mitra',
    description: 'A chatbot powered by AI to assist users with their queries.',
    link: '#',
    category: 'AI/ML',
  },
  {
    name: 'Expert-O',
    description:
      'A full-fledged e-commerce platform with user authentication and payment gateway.',
    link: '#',
    category: 'Web',
  },
  {
    name: 'Ihabyhimani',
    description: 'A tool to analyze large datasets and generate insights.',
    link: '#',
    category: 'Data',
  },
];

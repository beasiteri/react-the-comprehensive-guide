import { Database, Layers3, Boxes, Code2, GitBranch } from 'lucide-react';

export const technologies = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Axios',
  'MSW',
];

export const topics = [
  {
    number: '01',
    title: 'Data Fetching with Axios',
    description: 'Fetching API data, handling responses, and mocking requests with MSW.',
    icon: Database,
    branch: '01-data-fetching-axios',
  },
  {
    number: '02',
    title: 'Container Components',
    description: 'Separating application logic and state management from presentation.',
    icon: Layers3,
    branch: '02-container-components',
  },
  {
    number: '03',
    title: 'Higher-Order Components',
    description: 'Exploring reusable component logic with the HOC pattern.',
    icon: Boxes,
    branch: '03-higher-order-components',
  },
  {
    number: '04',
    title: 'Render Props',
    description: 'Sharing component behavior through the render props pattern.',
    icon: Code2,
    branch: '04-render-props',
  },
  {
    number: '05',
    title: 'Context API',
    description: 'Sharing state across components with React Context.',
    icon: GitBranch,
    branch: '05-context-api',
  },
];
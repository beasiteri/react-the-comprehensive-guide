import { http, HttpResponse } from 'msw';
import { baseUrl } from '../config/api';

export const handlers = [
  http.get(`${baseUrl}api/topics`, () => {
    return HttpResponse.json([
      {
        title: 'Data Fetching with Axios',
        description: 'Fetching and displaying REST API data with Axios.',
        demoUrl: 'https://beasiteri.github.io/react-data-fetching-axios/',
        repoUrl: 'https://github.com/beasiteri/react-data-fetching-axios',
      },
      {
        title: 'Container Components',
        description: 'Separating data and state management from presentation.',
        demoUrl: 'https://beasiteri.github.io/react-container-components/',
        repoUrl: 'https://github.com/beasiteri/react-container-components',
      },
      {
        title: 'Higher Order Components',
        description: 'Reusing component logic with higher order components.',
        demoUrl: 'https://beasiteri.github.io/react-higher-order-components/',
        repoUrl: 'https://github.com/beasiteri/react-higher-order-components',
      },
      {
        title: 'Context API',
        description: 'Sharing state across components with React Context.',
        demoUrl: 'https://beasiteri.github.io/react-context-api/',
        repoUrl: 'https://github.com/beasiteri/react-context-api',
      },
      {
        title: 'Render Props',
        description: 'Sharing component logic through the render props pattern.',
        demoUrl: 'https://beasiteri.github.io/react-render-props/',
        repoUrl: 'https://github.com/beasiteri/react-render-props',
      },
      {
        title: 'Hooks API',
        description: 'Exploring React Hooks and reusable stateful logic.',
        demoUrl: 'https://beasiteri.github.io/react-hooks-api/',
        repoUrl: 'https://github.com/beasiteri/react-hooks-api',
      }
    ]);
  }),
];
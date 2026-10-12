# React Boilerplate with Vite, Tailwind CSS, Axios, MUI & MSW

A reusable React boilerplate using Vite, Tailwind CSS, Axios, Material UI, and Mock Service Worker (MSW).

MSW provides **browser-based API mocking**, making this boilerplate suitable for **local development and static hosting platforms such as GitHub Pages**.

## Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React             | Building the user interface       |
| Vite              | Development server and build tool |
| TypeScript        | Static type checking              |
| Tailwind CSS      | Utility-first styling             |
| Material UI       | Pre-built UI components           |
| Material UI Icons | Material Design icons             |
| ESLint            | Code quality and consistency      |
| Axios             | HTTP requests                     |
| MSW               | Browser-based API mocking         |

## Included

- React + Vite setup
- TypeScript
- Tailwind CSS configuration
- ESLint configuration
- Material UI components and icons
- Axios for HTTP requests
- MSW for browser-based API mocking
- Mock Service Worker setup
- Basic project structure

## Usage

This repository is intended to be used as a template for **React development with a browser-based mock REST API**.

On GitHub, select **Use this template** and **Create a new repository** based on this boilerplate.

After creating the new repository:

```bash
git clone <your-new-repository-url>

cd <your-new-project>

npm install

npm run dev
```

The development environment starts the Vite development server with MSW enabled.

MSW intercepts API requests in the browser and returns the configured mock responses.

No separate backend or local API server is required.

## Mock API

Mock API handlers can be added to:

```text
src/mocks/handlers.ts
```

The MSW service worker is located in:

```text
public/mockServiceWorker.js
```

This service worker is registered in the browser when the application starts.

For example, a `/api/books` endpoint can be mocked with MSW:

```ts
import { http, HttpResponse } from 'msw';

const apiBase = import.meta.env.BASE_URL;

export const handlers = [
  http.get(`${apiBase}api/books`, () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'JavaScript—The Comprehensive Guide',
        author: 'Philip Ackermann',
        isbn: '978-3836286299',
        rating: 5,
      },
    ]);
  }),
];
```

API requests can then be made normally with Axios:

```ts
const { data } = await axios.get(`${import.meta.env.BASE_URL}api/books`);
```

MSW intercepts the request in the browser and returns the mocked response.

The example above is only a starting point. Replace the endpoint, response data, and handlers with the API structure required by your project.

## Deployment

This boilerplate includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

The workflow is located in:

```text
.github/workflows/deploy.yml
```

After creating a new repository from this template:

1. Set the `base` path in `vite.config.ts` to match the repository name:

```ts
base: '/your-repository-name/',
```

2. In GitHub, go to **Settings → Pages** and select **GitHub Actions** as the source.

3. Push your changes to the `main` branch.

The GitHub Actions workflow automatically builds the application and deploys the `dist` directory to GitHub Pages.

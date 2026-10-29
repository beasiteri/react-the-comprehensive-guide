## React Projects - Vite, Tailwind CSS, Axios & MSW

This repository is based on a reusable React boilerplate and contains projects exploring different React concepts and development patterns.
The projects are inspired by topics covered in _React The Comprehensive Guide_. Each topic is implemented in a separate Git branch, with practical examples built on top of the shared boilerplate.
The main branch contains the base project setup and shared development tools, while the other branches focus on specific React concepts and implementations.

## Tech Stack

| Technology   | Purpose                           |
| ------------ | --------------------------------- |
| React        | Building the user interface       |
| Vite         | Development server and build tool |
| TypeScript   | Static type checking              |
| Tailwind CSS | Utility-first styling             |
| Axios        | HTTP requests                     |
| MSW          | Browser-based API mocking         |
| Lucide React | Icons                             |
| ESLint       | Code quality and consistency      |

## React Topics & Branches

This repository explores different React concepts through practical examples, with each topic developed on a separate Git branch.

### Available Topics

| Branch                       | Topic                    | Description                                             |
| ---------------------------- | ------------------------ | ------------------------------------------------------- |
| `main`                       | React Boilerplate        | Base project setup and shared configuration.            |
| `01-data-fetching-axios`     | Data Fetching with Axios | Fetching API data using Axios and MSW.                  |
| `02-container-components`    | Container Components     | Separating application logic from presentation.         |
| `03-higher-order-components` | Higher-Order Components  | Reusing component logic with HOCs.                      |
| `04-render-props`            | Render Props             | Sharing component logic using the render props pattern. |
| `05-context-api`             | Context API              | Sharing state across components using React Context.    |

### How to Explore a Topic

Each React topic is developed on a separate branch. To explore a specific example, clone the repository and switch to the corresponding branch.

If you haven't cloned the repository yet:

```bash
git clone <repository-url>
cd <repository-name>
git switch 01-data-fetching-axios
npm install
npm run dev
```

If you already have the repository locally, simply switch branches:

```bash
git switch 01-data-fetching-axios
```

Replace `01-data-fetching-axios` with the branch you want to explore.

See the [Usage](#usage) section for more information about setting up and running the project.

Each branch demonstrates a specific React concept through a practical implementation while building on the project's shared foundation.

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

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { worker } from './mocks/browser';
import { baseUrl } from './config/api';

async function enableMocking() {
  await worker.start({
    serviceWorker: {
      url: `${baseUrl}mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './config/api';
import './App.css';

type TopicsProps = {
  title: string;
  description: string;
  demoUrl: string;
  repoUrl: string;
};

function App() {
  const [topics, setTopics] = useState<TopicsProps[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: topic } = await axios.get<TopicsProps[]>(`${baseUrl}api/topics`);
        setTopics(topic);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (topics.length === 0) {
    return <div>No topics found.</div>;
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold">React The Comprehensive Guide</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Practical React examples exploring the concepts covered in the book.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{topic.title}</h2>

              <p className="mt-3 flex-1 text-sm text-gray-600">{topic.description}</p>

              <div className="mt-6 flex gap-3">
                <a
                  href={topic.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
                >
                  View Demo
                </a>

                <a
                  href={topic.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
                >
                  View Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;

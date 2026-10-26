import { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';
import { baseUrl } from '../config/api';

type BookProps = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  rating: number;
};

function BookListContainer() {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<BookProps[]>(`${baseUrl}api/books`);
        setBooks(data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <BookList books={books} error={error} loading={loading} />;
}

export default BookListContainer;

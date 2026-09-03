import { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';

type BookListProps = {
  id: number;
  title: string;
  author: string;
  isbn: number;
  rating: number;
};

function BookListContainer() {
  const [books, setBooks] = useState<BookListProps[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: books } = await axios.get<BookListProps[]>('/books');
        setBooks(books);
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

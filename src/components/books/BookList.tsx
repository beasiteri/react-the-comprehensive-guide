import { useEffect, useState } from 'react';
import axios from 'axios';
import './BookList.css';

type BookListProps = {
  id: number;
  title: string;
  author: string;
  isbn: number;
  rating: number;
};

function BookList() {
  const [books, setBooks] = useState<BookListProps[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data: books } = await axios.get<BookListProps[]>('/books');
        setBooks(books);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Unknown error'));
      }
    })();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-lg text-center uppercase mb-6">Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Isbn</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;

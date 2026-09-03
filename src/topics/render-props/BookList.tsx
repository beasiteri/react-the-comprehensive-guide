import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table2, LayoutGrid } from 'lucide-react';

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  rating: number;
};

type BookListProps = {
  renderTable: (books: Book[]) => React.ReactNode;
  renderCard: (books: Book[]) => React.ReactNode;
};

function BookList({ renderTable, renderCard }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [view, setView] = useState<'table' | 'card'>('table');

  useEffect(() => {
    (async () => {
      try {
        const { data: books } = await axios.get<Book[]>('/books');
        setBooks(books);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleClickTable = () => {
    setView('table');
  };

  const handleClickCard = () => {
    setView('card');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (books.length === 0) {
    return <div>No boks found.</div>;
  }

  return (
    <div>
      <div className="flex justify-end gap-2">
        <div className="relative group">
          <button
            type="button"
            onClick={handleClickTable}
            aria-label="Table View"
            className="flex items-center cursor-pointer"
          >
            <Table2 size={20} className={view === 'table' ? 'text-black' : 'text-gray-400'} />
          </button>

          <span className="absolute right-0 top-full mt-2 hidden group-hover:block rounded bg-black px-2 py-1 text-xs text-white whitespace-nowrap">
            Table View
          </span>
        </div>

        <div className="relative group">
          <button
            type="button"
            onClick={handleClickCard}
            aria-label="Card View"
            className="flex items-center cursor-pointer"
          >
            <LayoutGrid size={20} className={view === 'card' ? 'text-black' : 'text-gray-400'} />
          </button>

          <span className="absolute right-0 top-full mt-2 hidden group-hover:block rounded bg-black px-2 py-1 text-xs text-white whitespace-nowrap">
            Card View
          </span>
        </div>
      </div>

      {view === 'table' && renderTable(books)}
      {view === 'card' && renderCard(books)}
    </div>
  );
}

export default BookList;

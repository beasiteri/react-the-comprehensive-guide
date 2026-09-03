type BookProps = {
  id: number;
  title: string;
  author: string;
  isbn: number;
  rating: number;
};

type BookListProps = {
  data: BookProps[];
  error: Error | null;
  loading: boolean;
};

function BookList({ data: books, error, loading }: BookListProps) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (books.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <div className="flex flex-col border-2 p-4 mb-6">
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

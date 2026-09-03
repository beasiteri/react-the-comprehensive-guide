import BookList from './BookList';

function BooksPage() {
  return (
    <div className="w-full max-w-167.5 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">My Books</h1>

      <p className="text-gray-600 mb-6">
        Browse our collection of books and choose your preferred view.
      </p>

      <BookList
        renderTable={(books) => (
          <div className="flex flex-col border p-4 mb-6">
            <h1 className="font-bold text-lg text-center uppercase mb-6">Coding Books</h1>
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
        )}

        renderCard={(books) => (
          <div className="flex flex-col border p-4 mb-6">
            <h1 className="font-bold text-lg text-center uppercase mb-6">Coding Books</h1>
            <div className="grid grid-cols-3 gap-4">
              {books.map((book) => (
                <div key={book.id} className="border p-4 rounded">
                  <h2 className="font-bold">{book.title}</h2>
                  <p>{book.author}</p>
                  <p>{book.isbn}</p>
                  <p>Rating: {book.rating}/5</p>
                </div>
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default BooksPage;

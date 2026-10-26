import { BookOpen, Library, Hash } from 'lucide-react';
import Rating from './Rating';

type BookProps = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  rating: number;
};

type BookListProps = {
  data: BookProps[];
  error: Error | null;
  loading: boolean;
};

function BookList({ data: books, error, loading }: BookListProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Library size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">All Books</h2>
          <p className="text-sm text-slate-500">Your collection at a glance</p>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-4 h-9 w-9 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
          <p className="font-medium text-slate-700">Loading your library...</p>
          <p className="mt-1 text-sm text-slate-500">Fetching your books</p>
        </div>
      ) : error ? (
        <div
          role="alert"
          className="m-6 rounded-xl border border-red-200 bg-red-50 p-5 text-red-700"
        >
          <p className="font-semibold">Unable to load your books</p>
          <p className="mt-1 text-sm">{error.message}</p>
        </div>
      ) : books.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <BookOpen size={36} className="mx-auto mb-3 text-slate-300" />
          <p className="font-semibold text-slate-800">Your library is empty</p>
          <p className="mt-1 text-sm text-slate-500">There are no books to display yet.</p>
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead className="bg-slate-50/80">
                <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4">Book</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">ISBN</th>
                  <th className="px-6 py-4">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {books.map((book) => (
                  <tr key={book.id} className="transition-colors hover:bg-indigo-50/40">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                          <BookOpen size={19} />
                        </div>
                        <span className="font-semibold text-slate-800">{book.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600">{book.author}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 font-mono text-xs text-slate-600">
                        <Hash size={12} />
                        {book.isbn}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <Rating max={5} initialRating={book.rating} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:hidden">
            {books.map((book) => (
              <article
                key={book.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex h-24 items-center justify-center bg-linear-to-br from-indigo-50 to-violet-100">
                  <BookOpen size={36} className="text-indigo-500" />
                </div>

                <div className="p-5">
                  <h3 className="font-bold leading-snug text-slate-900">{book.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{book.author}</p>

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Rating
                    </p>
                    <Rating max={5} initialRating={book.rating} />
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                    <Hash size={13} />
                    <span className="font-mono">{book.isbn}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default BookList;

import { BookOpen, Library, Hash } from 'lucide-react';
import BookList from './BookList';
import Rating from './Rating';

function BooksPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-linear-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
          <div className="mb-5 flex items-center gap-2 text-indigo-200">
            <Library size={20} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              My Digital Library
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Discover your next read.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
            Your personal collection of programming books, patterns, and ideas worth revisiting.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <BookList
          renderTable={(books) => (
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-7">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Coding Books</h2>
                  <p className="mt-1 text-sm text-slate-500">Your collection at a glance</p>
                </div>

                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {books.length} {books.length === 1 ? 'book' : 'books'}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-150 text-left">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Book</th>
                      <th className="px-6 py-4 font-semibold">Author</th>
                      <th className="px-6 py-4 font-semibold">ISBN</th>
                      <th className="px-6 py-4 font-semibold">Rating</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {books.map((book) => (
                      <tr key={book.id} className="transition-colors hover:bg-indigo-50/40">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                              <BookOpen size={20} />
                            </div>
                            <span className="font-semibold text-slate-800">{book.title}</span>
                          </div>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-600">{book.author}</td>

                        <td className="px-6 py-5">
                          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600">
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

              <div className="border-t border-slate-100 px-6 py-3 text-xs text-slate-400">
                Showing {books.length} {books.length === 1 ? 'title' : 'titles'}
              </div>
            </section>
          )}

          renderCard={(books) => (
            <section>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Coding Books</h2>
                  <p className="mt-1 text-sm text-slate-500">Explore your collection</p>
                </div>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {books.length} books
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((book, index) => (
                  <article
                    key={book.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                  >
                    <div
                      className={`flex h-32 items-center justify-center ${
                        index % 3 === 0
                          ? 'bg-indigo-100 text-indigo-700'
                          : index % 3 === 1
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      <BookOpen
                        size={42}
                        strokeWidth={1.4}
                        className="transition-transform duration-200 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold leading-snug text-slate-900">
                        {book.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">by {book.author}</p>

                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-500">
                          ISBN: {book.isbn}
                        </span>
                      </div>

                      <div className="mt-4 border-t border-slate-100 pt-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Reader rating
                        </p>
                        <Rating max={5} initialRating={book.rating} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5 text-center text-xs text-slate-400">
          Built with React, TypeScript, and the Render Props pattern.
        </div>
      </footer>
    </div>
  );
}

export default BooksPage;

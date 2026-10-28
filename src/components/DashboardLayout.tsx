import { BookOpen, Library, Users } from 'lucide-react';
import BookList from './BookList';
import UserList from './UserList';
import withDataFetching from './hoc/withDataFetching';
import { baseUrl } from '../config/api';

const BookListWithDataFetching = withDataFetching(BookList, `${baseUrl}api/books`);
const UserListWithDataFetching = withDataFetching(UserList, `${baseUrl}api/users`);

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative overflow-hidden mb-8 bg-linear-to-br from-indigo-600 via-violet-600 to-purple-700 p-8 text-white shadow-xl px-6 py-8 sm:px-10 sm:py-10">
        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-32 h-40 w-40 rounded-full bg-violet-400/20" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/15 p-3">
              <Library size={32} />
            </div>

            <div>
              <p className="text-sm font-medium text-indigo-100">YOUR PERSONAL SPACE</p>
              <h1 className="text-3xl font-bold sm:text-4xl">Digital Library Dashboard</h1>
              <p className="mt-2 text-indigo-100">Manage your books and users in one place.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
              <BookOpen size={16} />
              Book collection
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
              <Users size={16} />
              Users directory
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <BookListWithDataFetching />
        <UserListWithDataFetching />
      </main>
      <footer className="mt-10 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        Built with React, TypeScript, Axios, and Tailwind CSS
      </footer>
    </div>
  );
}

export default DashboardLayout;

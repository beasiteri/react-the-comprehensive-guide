import { Users, UserRound, MapPin, Phone, CalendarDays } from 'lucide-react';

type UserProps = {
  id: number;
  name: string;
  age: string;
  address: string;
  tel: string;
};

type UserListProps = {
  data: UserProps[];
  error: Error | null;
  loading: boolean;
};

function UserList({ data: users, error, loading }: UserListProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Users size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">All Users</h2>
          <p className="text-sm text-slate-500">Contact details at a glance</p>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-4 h-9 w-9 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
          <p className="font-medium text-slate-700">Loading your directory...</p>
          <p className="mt-1 text-sm text-slate-500">Fetching user information</p>
        </div>
      ) : error ? (
        <div
          role="alert"
          className="m-6 rounded-xl border border-red-200 bg-red-50 p-5 text-red-700"
        >
          <p className="font-semibold">Unable to load users</p>
          <p className="mt-1 text-sm">{error.message}</p>
        </div>
      ) : users.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <Users size={36} className="mx-auto mb-3 text-slate-300" />
          <p className="font-semibold text-slate-800">No users yet</p>
          <p className="mt-1 text-sm text-slate-500">There are no users to display.</p>
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead className="bg-slate-50/80">
                <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Age</th>
                  <th className="px-6 py-4">Address</th>
                  <th className="px-6 py-4">Telephone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user.id} className="transition-colors hover:bg-indigo-50/40">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                          <UserRound size={19} />
                        </div>
                        <span className="font-semibold text-slate-800">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={15} className="text-slate-400" />
                        {user.age}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={15} className="shrink-0 text-slate-400" />
                        {user.address}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Phone size={15} className="text-slate-400" />
                        {user.tel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:hidden">
            {users.map((user) => (
              <article
                key={user.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4 bg-linear-to-br from-indigo-50 to-violet-100 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                    <UserRound size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900">{user.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">Age: {user.age}</p>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-indigo-500" />
                    <span>{user.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={17} className="shrink-0 text-indigo-500" />
                    <span>{user.tel}</span>
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

export default UserList;

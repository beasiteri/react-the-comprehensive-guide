type UserProps = {
  id: number;
  name: string;
  age: string;
  address: number;
  tel: number;
};

type UserListProps = {
  data: UserProps[];
  error: Error | null;
  loading: boolean;
};

function UserList({ data: users, error, loading }: UserListProps) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="flex flex-col border-2 p-4">
      <h1 className="font-bold text-lg text-center uppercase mb-6">Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Tel</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>{user.tel}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

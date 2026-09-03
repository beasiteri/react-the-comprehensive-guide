import BookList from './topics/higher-order-components/BookList';
import UserList from './topics/higher-order-components/UserList';
import withDataFetching from './topics/higher-order-components/hoc/withDataFetching';
import './App.css';

const BookListWithDataFetching = withDataFetching(BookList, '/books');
const UserListWithDataFatching = withDataFetching(UserList, '/users');

function App() {
  return (
    <div className="app flex flex-col w-fit mx-auto p-4">
      <BookListWithDataFetching />
      <UserListWithDataFatching />
    </div>
  );
}

export default App;

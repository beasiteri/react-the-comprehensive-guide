import BookList from './components/BookList';
import UserList from './components/UserList';
import withDataFetching from './components/hoc/withDataFetching';
import { baseUrl } from './config/api';
import './App.css';

const BookListWithDataFetching = withDataFetching(BookList, `${baseUrl}api/books`);
const UserListWithDataFatching = withDataFetching(UserList, `${baseUrl}api/users`);

function App() {
  return (
    <div className="app flex flex-col w-fit mx-auto p-4">
      <BookListWithDataFetching />
      <UserListWithDataFatching />
    </div>
  );
}

export default App;

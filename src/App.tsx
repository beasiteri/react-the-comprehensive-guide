import { useState } from 'react';
import Context from './topics/context-api/counter/Context';
import CounterOne from './topics/context-api/counter/CounterOne';
import './App.css';
import CounterTwo from './topics/context-api/counter/CounterTwo';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter) => Math.min(15, counter + 1));
  };

  const decrement = () => {
    setCounter((counter) => Math.max(0, counter - 1));
  };

  return (
    <div className="app flex flex-col w-fit mx-auto p-4">
      <Context.Provider value={counter}>
        <div className="flex items-center gap-4">
          <CounterOne />
          <CounterTwo />
          <button
            onClick={increment}
            className="border rounded px-4 py-1 bg-blue-950 text-white hover:bg-blue-900 cursor-pointer"
          >
            Increment (max 15)
          </button>
          <button
            onClick={decrement}
            className="border rounded px-4 py-1 bg-green-950 text-white hover:bg-green-900 cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;

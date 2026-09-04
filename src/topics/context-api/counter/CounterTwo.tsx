import { useContext } from 'react';
import Context from './Context';

function CounterTwo() {
  const value = useContext(Context);

  return <div>CounterTwo: {value}</div>;
}

export default CounterTwo;

import { useContext } from 'react';
import Context from './Context';

function CounterOne() {
  const value = useContext(Context);

  return <div>CounterOne: {value}</div>;
}

export default CounterOne;

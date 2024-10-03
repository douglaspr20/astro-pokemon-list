import React, { useState, type FC } from 'react';

interface Props {
  initValue: number;
  children?: React.JSX.Element;
}

const Counter: FC<Props> = ({ initValue, children }) => {
  const [count, setCount] = useState(initValue);

  return (
    <>
      {children ?? <h1 className='text-5xl'>Counter</h1>}
      <h3 className='text-xl'>Value: {count}</h3>

      <button
        className='bg-blue-500 p-2 mr-2 rounded'
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <button
        className='bg-blue-500 p-2 mr-2 rounded'
        onClick={() => setCount(count - 1)}
      >
        -1
      </button>
    </>
  );
};

export default Counter;

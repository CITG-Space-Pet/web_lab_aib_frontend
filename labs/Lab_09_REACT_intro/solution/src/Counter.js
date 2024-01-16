import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <label>Счет: {count}</label>
      <button onClick={increment}>Увеличить +1</button>
      <button onClick={decrement}>Уменьшить -1</button>
    </div>
  );
};

export default Counter;
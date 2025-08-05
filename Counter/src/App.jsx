import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const maxValue = 20;
  const minValue = 0;

  const addValue = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Current Count: {count}</h2>

      {count === maxValue && <p style={{ color: 'red' }}>Maximum value reached!</p>}
      {count === minValue && <p style={{ color: 'red' }}>Minimum value reached!</p>}

      <button onClick={addValue} disabled={count === maxValue}>Add</button>
      <button onClick={removeValue} disabled={count === minValue}>Subtract</button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
}

export default App;

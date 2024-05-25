const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;

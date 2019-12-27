import React, {useState, useEffect} from "react";


const Admin = () => {
    const initialCount = +localStorage.getItem('storageCount') || 0;
    const [count, setCount] = useState(initialCount);
    const handleIncrement = () =>
      setCount(currentCount => currentCount + 1);
    const handleDecrement = () =>
      setCount(currentCount => currentCount - 1);
    useEffect(() => localStorage.setItem('storageCount', count));
    return (
      <div>
        <h1>{count}</h1>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    );
};

export default Admin;

import { useState } from "react";

export const InteractiveComponent = () => {
    const [count, setCount] = useState(0);
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800">Interaktiv Komponent</h2>
        <p className="text-gray-700">Antall klikk: {count}</p>
        <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded-lg" onClick={() => setCount(count + 1)}>Klikk meg</button>
      </div>
    );
  };
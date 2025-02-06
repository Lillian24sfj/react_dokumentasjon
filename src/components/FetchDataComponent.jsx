import { useState, useEffect } from "react";

export const FetchDataComponent = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800">Hentet Data</h2>
        <ul className="text-gray-700">
          {data.map(post => (
            <li key={post.id} className="py-1">{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default FetchDataComponent;
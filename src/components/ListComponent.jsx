export const ListComponent = ({ items }) => (
    <ul className="bg-white p-4 rounded-lg shadow-md">
      {items.map(item => (
        <li key={item.id} className="text-gray-700 py-1">{item.text}</li>
      ))}
    </ul>
  );

  export default ListComponent
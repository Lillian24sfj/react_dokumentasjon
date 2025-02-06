export const PropsComponent = ({ title, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-800">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
  
  export default PropsComponent;
  
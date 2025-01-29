const Card = ({ title, value, icon }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <span className="text-4xl mr-4">{icon}</span>
        <div>
          <h4 className="text-gray-600 text-sm">{title}</h4>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  
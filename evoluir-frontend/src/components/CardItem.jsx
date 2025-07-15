import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CardItem = ({ icon, to, label }) => {
  return (
    <div className="flex flex-col items-center group transition-transform duration-300 ease-in-out">
      <div
        className="w-52 h-52 border-4 border-white rounded-full 
                      flex items-center justify-center bg-gray-200 text-gray-700 
                      group-hover:scale-105 group-hover:shadow-xl transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon
          icon={icon}
          className="text-7xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <span
        className="mt-4 px-6 py-2 text-xl bg-white/10 text-white font-semibold rounded 
                       group-hover:bg-white/20 group-hover:text-blue-200 transition duration-300"
      >
        <Link to={to}>{label}</Link>
      </span>
    </div>
  );
};

export default CardItem;

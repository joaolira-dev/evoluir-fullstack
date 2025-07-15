import Logo from "../assets/images/logo-rpe.png";
import { ZoomIn } from "../components/partials/ZoomIn";
import { FadeIn } from "./partials/FadeIn";

export const PageContainer = ({ children }) => {
  return (
    <FadeIn>
      <div className="min-h-screen mx-auto px-4 py-6 animate-fadeIn duration-500 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 max-w-screen flex items-center flex-col">
        <ZoomIn>
          <img src={Logo} alt="Logo RPE" className="w-42 mb-6 hover:scale-110 transition-transform duration-300" />
        </ZoomIn>
        {children}
      </div>
    </FadeIn>
  );
};

export const Input = ({ placeholder, onChange, value, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className=" p-3 rounded-3xl border-2 border-blue-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
      onChange={onChange}
      value={value}
    />
  );
};

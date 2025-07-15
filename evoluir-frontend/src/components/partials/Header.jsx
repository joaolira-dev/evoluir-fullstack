import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMoneyBills,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logo-rpe.png";

export const Header = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: faHouse, label: "Início" },
    { to: "/faturas", icon: faMoneyBills, label: "Financeiro" },
    { to: "/clientes", icon: faUser, label: "Clientes" },
  ];

  return (
    <header className="backdrop-blur-md bg-blue-900/10 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="RPE" className="h-8" />
          <span className="text-white text-xl font-light tracking-wide hidden sm:block">
            RPE Pagamentos
          </span>
        </Link>

        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              title={item.label}
              className={`flex items-center gap-2 text-lg transition-all duration-200 ${
                location.pathname === item.to
                  ? "text-blue-300 font-semibold"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
              <span className="hidden sm:block">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

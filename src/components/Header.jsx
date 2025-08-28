import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/imag-logo.jpg";
import UserButtons from "./UserButtons";

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const completeHeader = (
    <header className="sticky top-0 bg-slate-950 text-slate-200 px-6 py-4 flex items-center justify-between shadow-xl shadow-slate-400 z-20">
      
      {/* Logo + Título */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          className="h-16 w-16 border-2 border-blue-500 rounded-xl shadow-md"
          src={logo}
          alt="Logo da Hashtag."
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 drop-shadow-lg">
          Magazine
        </h1>
      </Link>

      {/* Menu Desktop */}
      <nav className="hidden md:flex space-x-6 text-lg font-medium">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/sobre" className="hover:text-blue-400 transition-colors">Sobre</Link>
        <Link to="/contato" className="hover:text-blue-400 transition-colors">Contato</Link>
      </nav>

      {/* Botões de usuário */}
      <div className="hidden md:flex">
        <UserButtons />
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-2xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navegação Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-500 flex flex-col items-center py-4 md:hidden shadow-md">
          <Link to="/" className="py-2 text-lg hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</Link>
          <Link to="/sobre" className="py-2 text-lg hover:text-blue-400 transition-colors" onClick={toggleMenu}>Sobre</Link>
          <Link to="/contato" className="py-2 text-lg hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contato</Link>
          <UserButtons />
        </div>
      )}
    </header>
  );

  const simpleHeader = (
    <header className="sticky top-0 bg-slate-950 text-slate-200 px-6 py-4 flex items-center justify-between shadow-xl shadow-slate-400 z-20">
      <Link to="/" className="flex items-center">
        <img
          className="h-12 w-12 border-2 border-blue-500 rounded-xl shadow-md"
          src={logo}
          alt="Logo da Hashtag."
        />
      </Link>
    </header>
  );

  return <>{pathname === "/" ? completeHeader : simpleHeader}</>;
};

export default Header;


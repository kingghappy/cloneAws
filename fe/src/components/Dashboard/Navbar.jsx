import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">CloneAWS</div>
      <nav className="space-x-2">
        <Link to="/" className="hover:text-blue-600 p-2 cursor-pointer">
          Home
        </Link>
        <a to="#features" className="hover:text-blue-600 p-2 cursor-pointer">
          Features
        </a>
        <a to="#pricing" className="hover:text-blue-600 p-2 cursor-pointer">
          Pricing
        </a>
        <Link to="/contact" className="hover:text-blue-600 p-2 cursor-pointer">
          Contact
        </Link>
        <Link to="/login" className="hover:text-blue-600 p-2 cursor-pointer">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 cursor-pointer"
        >
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

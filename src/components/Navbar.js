import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">MySocial</h1>
      <div>
        <Link to="/" className="px-3">Home</Link>
        <Link to="/login" className="px-3">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

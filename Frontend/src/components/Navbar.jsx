import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold">MyLogo</div>

      <div className="flex gap-4 md:gap-8">
        <Link to="/" className="hover:text-blue-400">
          Create Posts
        </Link>

        <Link to="/posts" className="hover:text-blue-400">
          View Posts
        </Link>

        <Link className="hover:text-blue-400">Update Posts</Link>
      </div>

      <div className="flex items-center border rounded-lg px-3 py-2 gap-3 w-full md:w-80">
        <Search size={22} />

        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-green-100 p-4 text-gray-700">
      <div className="flex flex-1 items-center gap-4">
        <h2 className="text-lg font-semibold">CRUD App</h2>
        <Link to="/" className="cursor-pointer">
          Create Post
        </Link>
        <Link to="/all" className="cursor-pointer">
          All Posts
        </Link>
      </div>

      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 px-5 text-md outline-none bg-white rounded-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;

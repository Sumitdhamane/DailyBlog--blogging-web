import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
function Header() {
  return (
    <Navbar className="border-b-2 py-0.5 flex justify-between items-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Daily
        </span>
        Blog
      </Link>
      <form className="relative w-full max-w-xs">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="hidden lg:inline w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <AiOutlineSearch className="hidden lg:inline absolute right-3 top-2.5 text-gray-500" />
        </div>
      </form>
      <Button className="w-12 h-10 lg:hidden " color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500">
            Sign in
          </Button>
        </Link>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;

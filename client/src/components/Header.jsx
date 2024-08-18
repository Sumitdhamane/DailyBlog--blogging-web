import { Button, Navbar, Dropdown } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 py-1 flex justify-evenly items-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Daily
        </span>
        Blog
      </Link>

      <form className="relative w-full max-w-xs hidden lg:flex">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </form>

      {/* Regular links visible on larger screens */}
      <div className="">
        <Link to="/" className="mx-5">
          Home
        </Link>
        <Link to="/about" className="mx-5">
          About
        </Link>
        <Link to="/projects" className="mx-5">
          Projects
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch className="size-5" />
        </Button>
        <Button
          className="w-12 h-10 sm:inline-flex rounded-full justify-center items-center"
          color="gray"
        >
          <FaMoon />
        </Button>

        <Link to="/signin">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Sign In
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}

export default Header;

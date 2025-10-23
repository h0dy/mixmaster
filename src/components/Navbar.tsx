import { Link, NavLink } from "react-router-dom";

const navLinkClasses = "text-gray-900 transition-all tracking-wider";

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="container xl:max-w-6xl mx-auto flex flex-col px-5 py-3 sm:flex-row sm:justify-between sm:items-center">
        <Link
          to="/"
          className="text-teal-500 text-2xl tracking-wide font-bold sm:text-3xl"
        >
          MixMaster
        </Link>
        <div className="flex flex-col mt-4 gap-4 text-xl sm:flex-row sm:mt-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${navLinkClasses} text-teal-500` : navLinkClasses
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${navLinkClasses} text-teal-500` : navLinkClasses
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${navLinkClasses} text-teal-500` : navLinkClasses
            }
            to="/newsletter"
          >
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <>
      <nav className="p-2 rounded-b-md shadow-md">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <div className="hidden md:block">
            <p className="font-bold text-lg">Cameron Stanley</p>
            <p className="text-xs">Web Development</p>
          </div>
          <div className="flex justify-between gap-4 items-center w-full md:w-auto">
            <ul className="flex gap-4 text-(--color-text) font-medium md:mr-8 dark">
              <li>
                <Link
                  className="hover:underline dark:text-(--color-accent)"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline dark:text-(--color-accent)"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <button
              className="cursor-pointer mr-8"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <FaSun className="w-6 h-6" />
              ) : (
                <FaRegMoon className="w-6 h-6" />
              )}
            </button>
            <Link
              className="bg-(--color-accent) py-1 px-3 rounded text-white cursor-pointer hover:bg-(--color-soft) hover:text-(--color-text) hover:shadow-lg hover:shadow-(--color-text)/50"
              to="/connect"
            >
              Connect
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

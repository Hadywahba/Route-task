import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { HiMoon } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
export default function Navbar({darkmode , toggleDark}) {
  const [toggle, settoggle] = useState(false);
const navigate= useNavigate()

  // toggle function
  function navButton() {
    settoggle(!toggle);
  }
  // toggle function

  // logo function
function goto(){
 navigate("/")
}

  // logo function
  return (
    <nav className="bg-slate-200 text-black dark:bg-gray-900 dark:text-white  ">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4  z-50">
        <div onClick={goto}>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white  cursor-pointer">
            {" "}
            Our Gallery
          </span>
        </div>

        <div className="flex items-center justify-center  gap-5">
          <div
            className={`${
              toggle ? "visible" : "hidden"
            } w-full md:block  absolute left-0 top-[50px] md:relative md:top-0    md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-3 rounded-md  md:p-0 mt-4 text-center  bg-slate-400 dark:bg-slate-800 md:dark:bg-transparent md:bg-transparent   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  onClick={() => settoggle(false)}
                  to={""}
                  className="     block py-2 px-3   rounded-sm   md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
               <li>
                <NavLink
                  onClick={() => settoggle(false)}
                  to={"/cart"}
                  className="     block py-2 px-3   rounded-sm   md:p-0 "
                  aria-current="page"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <button onClick={toggleDark} className="text-black dark:text-white text-3xl">
          {darkmode ? <HiMoon /> : <CiLight />}
          </button>
          <button
            onClick={navButton}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

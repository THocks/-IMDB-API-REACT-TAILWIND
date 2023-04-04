
import { useState } from "react";
import logo from "../../utils/img/logo.svg";


//ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-primary shadow-md   w-full z-10 top-0">
        <div className="flex items-center  text-white ml-7">
          <span className="text-black no-underline" to="/">
            <Link to={"/"} >
              <img src={logo} alt="logo" className=" w-24 h-24" />
            </Link>
          </span>
        </div>

        <div className="block lg:hidden ">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-white"
            onClick={toggleNavigation}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden "
          } lg:block pt-6  lg:pt-0`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center  ">
            <div class="flex items-center justify-center mr-3 mb-6">
              <div class="flex border-2 rounded ">
                <input
                  type="text"
                  class="px-4 py-2 w-80 "
                  placeholder="Pesquise no site..."
                />
                <button class="flex items-center justify-center px-4 border-l">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </button>
              </div>
            </div>
            <li className="mr-12 mb-6">
              <Link
                to={"/sobre"}
                className="inline-block text-2xl font-bold cursor-pointer text-white no-underline hover:text-blue-200 hover:text-underline py-2 px-4"
              >
                Logar
              </Link>
            </li>

            <li className="mr-8 ml-3 mb-6 relative">
              <div
                //   onClick={() => setIsOpenFavorits(!isOpenFavorits)}
                className="cursor-pointer flex  "
              >
                <IoIosHeartEmpty
                  size={25}
                  className="text-2xl  text-white no-underline  hover:text-blue-200 hover:text-underline"
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

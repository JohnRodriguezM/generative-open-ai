import { FC, useContext } from "react";

import { Link } from "react-router-dom";
import { useView } from "../../hooks/useView/useView";
import { SvgComponent } from "../Svg/SvgComponent";

import imgLogo from "../../assets/logoapp.png";
import { DataContext } from "../../Context/DataContext";
import { Instructions } from "./../../components/Instructions/Instructions";

interface HeaderWithAuthh {
  data?: any;
}

export const Header: FC<HeaderWithAuthh> = ({ data, ...props }) => {
  const [hamburgerView, setHamburgerView] = useView(false);
  const { setData } = useContext(DataContext);
  return (
    <div className="relative bg-slate-50  z-50 mb-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" onClick={() => setData([]) }>
              <span className="sr-only">Workflow</span>
              <img
                src={imgLogo}
                width=""
                className="h-8 w-auto sm:h-10"
                alt="h"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={setHamburgerView}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <SvgComponent d="M4 6h16M4 12h16M4 18h16" />
            </button>
          </div>
          <nav className="hidden md:grid md:place-items-center md:justify-center grid-cols-3 space-x-10">
            <div className="relative">
              <Link
                onClick={() => {
                  setData([]);
                  setHamburgerView(false);
                }}
                to="/create"
                id="btn-close-solutions"
                className="ml-3text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium text-gray-500  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                Create your AI Images
              </Link>
            </div>
            <div className="relative grid grid-cols-2 gap-16">
              <Link
                to="/contributions"
                id="btn-close-more"
                onClick={() => {
                  setHamburgerView(false);
                }}
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 mr-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                aria-expanded="false"
              >
                <span>Contributions</span>
              </Link>
              <Link
                to="/instructions"
                onClick={() => {
                  setHamburgerView(false);
                }}
                id="btn-close-more"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 mr-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                aria-expanded="false"
              >
                <span>Instructions</span>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => {
                console.log("session closed");
                /*setSeeMoreOption(false);
                  handleGetOut();*/
              }}
              id="btn-close-more"
              className=" rounded-md p-2  border border-transparent bg-indigo-600  text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-8"
              aria-expanded="false"
            >
              <span>Cerrar Sesión</span>
            </button>
          </nav>
        </div>
      </div>
      <div
        className={`${
          hamburgerView
            ? "active absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            : "inactive absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        }`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div
            className={
              hamburgerView ? "pt-5 pb-6 px-5" : "pt-5 pb-6 px-5 hidden"
            }
          >
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={imgLogo} alt="Workflow" />
              </div>
              <div className="-mr-2">
                <button
                  onClick={setHamburgerView}
                  type="button"
                  id="btn-close"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <SvgComponent d="M6 18L18 6M6 6l12 12" />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  className="ml-3 text-base font-medium text-gray-900"
                  to="/create"
                  onClick={() => {
                    setData([]);
                    setHamburgerView(false);
                  }}
                >
                  Create your AI Images
                </Link>
                <Link
                  className="ml-3 text-base font-medium text-gray-900"
                  to="/contributions"
                  onClick={() => {
                    setHamburgerView(false);
                  }}
                >
                  {" "}
                  Contributions{" "}
                </Link>
                <Link
                  className="ml-3 text-base font-medium text-gray-900"
                  to="/instructions"
                  onClick={() => {
                    setHamburgerView(false);
                  }}
                >
                  {" "}
                  Intructions
                </Link>

                <a
                  href="#"
                  className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600  py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Cerrar sesión
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

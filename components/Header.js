import { useState } from "react";
import MainWrapper from "./MainWrapper";

const NavList = ({ children }) => (
  <a
    href="#"
    className={
      "poppins ml-0 lg:ml-8 font-bold py-3 px-8 lg:p-0 border-b lg:border-b-0 text-gray-700 "
    }
  >
    {children}
  </a>
);

export default function Header({ name }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-white flex justify-center">
      <MainWrapper className="flex items-center h-20 lg:h-32">
        <h1 className="text-3xl concert text-primary -mt-5">{name}</h1>
        <div
          className={
            "z-20 flex flex-col lg:flex-row items-stretch lg:items-center ml-auto w-full lg:w-auto h-screen lg:h-auto fixed lg:static top-0 left-0 bg-white lg:bg-transparent transition-all duration-300 transform lg:transform-none " +
            (menu ? "translate-x-0" : "translate-x-full")
          }
        >
          <div className="mb-5 py-3 px-8 flex justify-end">
            <button
              onClick={() => setMenu(false)}
              type="button"
              className={
                "block lg:hidden ml-auto text-gray-700 py-2 px-3 -mr-3"
              }
            >
              TUTUP
            </button>
          </div>
          <NavList>Beranda</NavList>
          <NavList>Destinasi</NavList>
          <NavList>Tentang</NavList>
        </div>
        <button
          onClick={() => setMenu(true)}
          type="button"
          className={"block lg:hidden ml-auto py-2 px-3 -mr-3 text-gray-700"}
        >
          MENU
        </button>
      </MainWrapper>
    </div>
  );
}

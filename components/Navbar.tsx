import React from "react";
import Logo from "./Logo";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { theme } from '../tailwind.config';

// function getCurrentBreakpoints() {
//     return Object.keys(theme.screens).find((key) => window.innerWidth > theme.screens[key]);
// }


const Navbar = () => {
  console.log(theme)

  return (
    <>
      <div className="navbar text-white text-xl uppercase z-[3] hover:bg-black  transition-colors-5 rounded-md">
        <div className="navbar-start relative">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <a>Hakkımızda</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Hizmetlerimiz
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Ceza Hukuku</a>
                  </li>
                  <li>
                    <a>İdare Hukuku</a>
                  </li>
                  <li>
                    <a>Vergi Hukuku</a>
                  </li>
                  <li>
                    <a>İş Hukuku</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>İletişim</a>
              </li>
            </ul>
          </div>
          <div className="">
          <Logo />
          
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Hakkımızda</a>
            </li>
            <li tabIndex={0}>
              <a>
                Hizmetlerimiz
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-10">
                <li>
                  <a>Ceza Hukuku</a>
                </li>
                <li>
                  <a>İdare Hukuku</a>
                </li>
                <li>
                  <a>Vergi Hukuku</a>
                </li>
                <li>
                  <a>İş Hukuku</a>
                </li>
                <li>
                  <a>Medeni Hukuk</a>
                </li>
                <li>
                  <a>Ticaret Hukuku</a>
                </li>
              </ul>
            </li>
            <li>
              <a>İletişim</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
           <img className="w-24 h-24 rounded-full hover:scale-[1.5] hover:!-translate-x-[100px] hover:translate-y-16 " src="https://iili.io/HoSHHlV.jpg" alt="Avukat" /> {/*https://freeimage.host/i/HoSHHlV */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

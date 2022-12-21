import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { styled } from "@linaria/react";
import { css,cx } from "@linaria/core";

const Layout = ({children}) => {
  return <div >
  <Navbar/>
  {children}
  <Footer/>
  </div>;
};

export default Layout;

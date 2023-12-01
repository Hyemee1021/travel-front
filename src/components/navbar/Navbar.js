import React, { useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import "./navbar.css";
const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              <SiYourtraveldottv className="icon" /> Travel
            </h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink" rel="noreferrer">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink" rel="noreferrer">
                Package
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink" rel="noreferrer">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="/" className="navLink" rel="noreferrer">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink" rel="noreferrer">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink" rel="noreferrer">
                News
              </a>
            </li>

            <button className="btn">
              <a href="/">Book now</a>
            </button>
          </ul>

          <div className="closeNavBar">
            <IoCloseSharp className="icon" />
          </div>
        </div>

        <div className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

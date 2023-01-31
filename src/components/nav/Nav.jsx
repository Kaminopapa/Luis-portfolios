import React, { useEffect, useState } from "react";
import "./nav.css";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlinePhoto } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);
  const handleClick = () => {
    if (activeNav !== "") {
      setActiveNav("");
    }
  };

  return (
    <nav>
      {/* take you to the top */}
      <a
        href="#"
        onClick={() => handleClick()}
        className={
          activeNav === "#" || (scrollPosition < 155 && scrollPosition >= 0)
            ? "active"
            : ""
        }
      >
        <HiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleClick()}
        className={
          activeNav === "#about" ||
          (scrollPosition > 755 && scrollPosition < 1280)
            ? "active"
            : ""
        }
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleClick()}
        className={
          activeNav === "#experience" ||
          (scrollPosition > 1280 && scrollPosition < 1881)
            ? "active"
            : ""
        }
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleClick()}
        className={
          activeNav === "#services" ||
          (scrollPosition > 1880 && scrollPosition < 3021)
            ? "active"
            : ""
        }
      >
        <MdOutlinePhoto />
      </a>
      <a
        href="#contact"
        onClick={() => handleClick()}
        className={
          activeNav === "#contact" ||
          (scrollPosition > 3077 && scrollPosition < 5000)
            ? "active"
            : ""
        }
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-charcoalGray">
      <div className=" w-full  mx-auto py-8 px-3">
        <div className="pl-4 md:pr-6 flex gap-6 sm:justify-end">
          <Link to="https://github.com/ramiz773">
            <FaGithub size={32} color="#ffff" />
          </Link>
          <Link to="https://www.linkedin.com/in/aleem-ramees-8a8827233/">
            <BsLinkedin size={32} color="#ffff" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-600 to-sky-600 px-4 sm:px-0 py-6 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <div className="menu menu-horizontal p-0 space-x-6 sm:space-x-2 sm:text-lg text-white">
            <Link href="/" className="sm:px-4">
              Home
            </Link>
            <Link href="/resume" className="sm:px-4">Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

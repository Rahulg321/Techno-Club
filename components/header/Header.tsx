'use client';

import { VscDebugBreakpointLog } from 'react-icons/vsc';
import Link from 'next/link';
import { IoMenuSharp } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false);

  const handleClick = () => {
    setToggleHeader((prevState) => {
      return !prevState;
    });
  };

  return (
    <header className="border-b-2">
      <nav className="">
        <div className=" px-8 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="flex items-center">
                <VscDebugBreakpointLog size="32" />
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <Link href="/" className="py-5 px-3">
                  Home
                </Link>
                <Link href="/blog" className="py-5 px-3">
                  Blog
                </Link>
                <Link href="/events" className="py-5 px-3">
                  Events
                </Link>
                <Link href="/team" className="py-5 px-3">
                  Team
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/contact" className="py-5 px-3">
                Contact
              </Link>
              <Link href="/about" className="py-5 px-3">
                About
              </Link>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items:center">
              <button className="" onClick={handleClick}>
                {toggleHeader ? (
                  <ImCross size="30" />
                ) : (
                  <IoMenuSharp size="33" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu goes here */}
        <div className={`${toggleHeader ? '' : 'hidden'}`}>
          <Link href="/" className="block py-3 px-3 text-sm">
            Home
          </Link>
          <Link href="/events" className="block py-3 px-3 text-sm">
            Events
          </Link>
          <Link href="/blog" className="block py-3 px-3 text-sm">
            Blog
          </Link>
          <Link href="/about" className="block py-3 px-3 text-sm">
            Team
          </Link>
          <Link href="/contact" className="block py-3 px-3 text-sm">
            Contact us
          </Link>
          <Link href="/about" className="block py-3 px-3 text-sm">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
